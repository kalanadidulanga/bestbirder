import { useEffect, useState } from 'react'
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
import { Check, Eye, Home, Ticket, Trash, Trash2, X } from 'lucide-react';
import PaginationSection from '@/components/PaginationSection';
import { Input } from '@/components/ui/input';

const Gallery = () => {
  const [key, setkey] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [dataSet, setDataSet] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentDataSet = dataSet.slice(firstPostIndex, lastPostIndex);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  // const [status, setStatus] = useState(1);
  const [message, setMessage] = useState('');

  const clear = () => {
    setFile(null);
    setTitle('');
    // setStatus(1);
    setMessage('');
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!file) {
      toast.error('Please select an image');
      return;
    }

    if (!title) {
      toast.error('Please enter a title');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    // formData.append('status', status);

    try {
      const response = await axios.post(`${BACKEND_URL}/upload.php`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setkey(!key);
        clear();
      } else {
        toast.error(response.data.message);
      }
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading the image', error);
      setMessage('Failed to upload the image');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadGellery = async () => {
      setIsLoading2(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/get-gallery-admin.php`);
        if (response.data.success) {
          // Handle the reviews data
          setDataSet(response.data.data);
        } else {
          toast.error(response.data.message || 'Error fetching Gallery');
        }
      } catch (error) {
        toast.error('Error fetching Gallery:', error);
      } finally {
        setIsLoading2(false);
      }
    }

    loadGellery()
  }, [key])


  const deleteImage = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BACKEND_URL}/delete-image.php`, {
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
          <div className=' flex items-center gap-5'>
            <h4 className=' text-xl font-semibold'>Gallery</h4>
            <Button variant="outline" onClick={() => {
              setIsOpen(!isOpen)
              clear()
            }} className="ml-3">
              <Eye size={20} />
            </Button>
          </div>


          {isOpen && (
            <div className=' gap-5 border rounded-md my-10 p-3 shadow-md flex flex-col max-w-[500px]'>
              <h2 className=' text-2xl font-semibold'>Upload Image</h2>
              <form onSubmit={handleSubmit} className=' flex flex-col w-full gap-3'>
                <input type="file" onChange={handleFileChange} required />
                <Input type="text" placeholder="Title" value={title} onChange={handleTitleChange} required />
                {/* <input type="number" placeholder="Status" value={status} onChange={handleStatusChange} /> */}
                <Button disabled={isLoading} type="submit">Upload</Button>
              </form>
              {/* {message && <p>{message}</p>} */}
            </div>

          )}

          {/* table */}
          <div className='border rounded-md overflow-hidden relative mt-3'>
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">ID</TableHead>
                  <TableHead className="text-nowrap">Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="">
                {currentDataSet.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-left">{data.id}</TableCell>
                    <TableCell className="text-nowrap">
                      <a href={data.img_url} target="_blank" rel="noopener noreferrer">
                        <div className='w-[200px] h-auto rounded-md overflow-hidden shadow-lg'>
                          <img src={data.img_url} alt={data.title || ''} className=' object-cover' />
                        </div>
                      </a>
                    </TableCell>
                    <TableCell className="text-nowrap">{data.title}</TableCell>
                    <TableCell className="text-nowrap text-center">{data.status}</TableCell>
                    <TableCell>{data.created_at}</TableCell>
                    <TableCell className="text-right justify-end items-center h-full flex gap-2">

                      {/* <Button disabled={isLoading} className="w-10 h-10 p-1 hover:text-primary2" variant="outline" onClick={() => { }}>
                        <Home size={18} />
                      </Button> */}

                      <Button disabled={isLoading} className="w-10 h-10 p-1 hover:text-destructive" variant="outline" onClick={() => { deleteImage(data.id) }}>
                        <Trash2 size={18} />
                      </Button>

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

export default Gallery