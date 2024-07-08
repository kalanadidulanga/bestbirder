import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import PaginationSection from '@/components/PaginationSection'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ALL_REVIEWS, BACKEND_URL, REVIEWS } from '@/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaStar } from "react-icons/fa";

const AllReviews = () => {


    const [key, setkey] = useState(true);
    const [isLoading2, setIsLoading2] = useState(false);
    const [dataSet, setDataSet] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentDataSet = dataSet.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
        const loadReviews = async () => {
            setIsLoading2(true);
            try {
                const response = await axios.get(`${BACKEND_URL}/get-reviews-client.php`);
                if (response.data.success) {
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


    return (
        <>
            {/* <Navbar /> */}

            {/* <PageHeader name={'All Reviews'} /> */}

            {/* // Display all reviews here */}
            <div className=' max-container padding-container py-24'>
                <div className=' flex flex-col'>
                    <div className=" flex flex-col gap-3 w-full h-auto items-center pb-10">
                        <h1 className=" text-5xl md:text-6xl font-bold text-center text-primary">All Reviews</h1>
                        <p className=" text-sm text-gray-700 text-center">All of your reviews have a personal touch</p>
                    </div>

                    {isLoading2 && (
                        <Loading className={" h-[20vh]"} />
                    )}

                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                        {currentDataSet?.map((review, index) => (
                            <div className=' w-full flex flex-col gap-5' key={index}>
                                <div className=' flex justify-between w-full'>
                                    <div className=' flex gap-2 w-full overflow-hidden items-center'>
                                        {/* <div className=' w-14 h-14 rounded-full overflow-hidden flex justify-center items-center'>
                                        <Avatar>
                                            <AvatarImage src={review.img} />
                                            <AvatarFallback>{review.fname?.slice(0, 1)}{review.lname?.slice(0, 1)}</AvatarFallback>
                                        </Avatar>
                                    </div> */}

                                        <div className=' flex flex-col items-start w-auto justify-center'>
                                            <h5 className=' text-lg font-bold'>{review.fname}{" "}{review.lname}</h5>
                                            {/* <p className='text-sm font-normal'>{review.role}</p> */}
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-center items-center w-[86px]'>
                                        <StarRate rate={review.stars} />
                                    </div>
                                </div>
                                <div className=" w-full overflow-hidden flex">
                                    <p className=' text-sm'>
                                        {review.review}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className=" flex justify-center mt-5">
                        <PaginationSection
                            totalPosts={dataSet.length}
                            postsPerPage={postsPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>

                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default AllReviews

const StarRate = ({ rate }) => {
    const stars = Array(5).fill(0);

    for (let i = 0; i < rate; i++) {
        stars[i] = 1;
    }

    return (
        <>
            {stars.map((star, index) => (
                <FaStar key={index} className={`${star ? 'text-yellow-500' : ''}`} size={16} />
            ))
            }
        </>
    );
}