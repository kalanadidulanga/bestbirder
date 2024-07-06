import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BACKEND_URL } from '@/constants';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { Check, Ticket, Trash, X } from 'lucide-react';
import PaginationSection from '@/components/PaginationSection';


const Reviews = () => {

  const [key, setkey] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [dataSet, setDataSet] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentDataSet = dataSet.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading2(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/get-reviews.php`);
        if (response.data.success) {
          // Handle the reviews data
          setDataSet(response.data.data);
        } else {
          toast.error(response.data.message || 'Error fetching reviews');
        }
      } catch (error) {
        toast.error('Error fetching reviews:', error);
      } finally {
        setIsLoading2(false);
      }
    }

    loadReviews()
  }, [key])

  const rejectReview = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BACKEND_URL}/reject-review.php`, {
        params: { id }
      });

      if (response?.data?.success) {
        toast.success(response.data.message);
        setkey(!key);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error updating review status:', error);
      return { success: false, message: error.message };
    } finally {
      setIsLoading(false);
    }
  }

  const acceptReview = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BACKEND_URL}/accept-review.php`, {
        params: { id }
      });

      if (response?.data?.success) {
        toast.success(response.data.message);
        setkey(!key);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error updating review status:', error);
      return { success: false, message: error.message };
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className=' w-full h-full overflow-hidden'>
        <div className=' max-container padding-container py-8'>
          {/* header */}
          <div className=' mb-3'>
            <h4 className=' text-xl font-semibold'>All Reviews</h4>
          </div>
          {/* table */}
          <div className='border rounded-md overflow-hidden relative'>
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">ID</TableHead>
                  <TableHead className="text-nowrap">First Name</TableHead>
                  <TableHead className="text-nowrap">Last Name</TableHead>
                  <TableHead>Review</TableHead>
                  <TableHead className="text-center">Stars</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="">
                {currentDataSet.map((review, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-left">{review.id}</TableCell>
                    <TableCell className="text-nowrap">{review.fname}</TableCell>
                    <TableCell className="text-nowrap">{review.lname}</TableCell>
                    <TableCell>{review.review}</TableCell>
                    <TableCell className="text-center">{review.stars}</TableCell>
                    <TableCell className={`text-nowrap ${review.status == 0 && 'text-destructive' || review.status == 1 && 'text-primary' || review.status >= 2 && 'text-green-500'}`}>{review.status == 0 && 'Rejected or Deleted' || review.status == 1 && 'Pending' || review.status >= 2 && 'Approved'}</TableCell>
                    <TableCell className="text-nowrap">2024-03-24</TableCell>
                    <TableCell className="text-right justify-end flex gap-2 flex-nowrap">

                      {(review.status == 1 || review.status == 0) && (
                        <>
                          <Button disabled={isLoading} className="w-10 h-10 p-1 hover:text-primary2" variant="outline" onClick={() => { acceptReview(review.id) }}>
                            <Check size={18} />
                          </Button>
                        </>
                      )}

                      {(review.status == 1 || review.status == 2) && (
                        <Button disabled={isLoading} className="w-10 h-10 p-1 hover:text-destructive" variant="outline" onClick={() => { rejectReview(review.id) }}>
                          <X size={18} />
                        </Button>
                      )}

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {isLoading2 && (
              <Loading className={"h-[10vh]"} />
            )}

            {isLoading && (
              <div className=' z-50 w-full min-h-[30vh] h-full bg-black/20 absolute flex justify-center items-center top-0'>
                <Loading className={"h-[10vh]"} />
              </div>
            )}
          </div>

          <div className=" flex justify-end mt-5">
            <PaginationSection
              totalPosts={dataSet.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Reviews