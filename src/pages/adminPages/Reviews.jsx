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
  const [dataSet, setDataSet] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentDataSet = dataSet.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading(true);
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
        setIsLoading(false);
      }
    }

    loadReviews()
  }, [key])

  return (
    <>
      <div className=' w-full h-full overflow-hidden'>
        <div className=' max-container padding-container py-8'>
          {/* header */}
          <div className=' mb-3'>
            <h4 className=' text-xl font-semibold'>All Reviews</h4>
          </div>
          {/* table */}
          <div className='border rounded-md overflow-hidden'>
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">ID</TableHead>
                  <TableHead className="text-nowrap">First Name</TableHead>
                  <TableHead className="text-nowrap">Last Name</TableHead>
                  <TableHead>Review</TableHead>
                  <TableHead>Stars</TableHead>
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
                    <TableCell className="text-nowrap">{review.status === 0 && 'Rejected or Deleted' || review.status === 1 && 'Pending' || review.status >= 2 && 'Approved'}</TableCell>
                    <TableCell className="text-nowrap">2024-03-24</TableCell>
                    <TableCell className="text-right justify-end flex gap-2 flex-nowrap">

                      {(review.status === 1 || review.status === 0) && (
                        <>
                          <Button className="w-10 h-10 p-1" variant="outline" onClick={() => { }}>
                            <Check size={18} />
                          </Button>
                        </>
                      )}

                      {(review.status === 1 || review.status === 2) && (
                        <Button className="w-10 h-10 p-1" variant="outline" onClick={() => { }}>
                          <X size={18} />
                        </Button>
                      )}

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {isLoading && (
              <Loading />
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