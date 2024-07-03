import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ALL_REVIEWS, REVIEWS } from '@/constants'
import React from 'react'
import { FaStar } from "react-icons/fa";

const AllReviews = () => {
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

                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                        {ALL_REVIEWS.map((review, index) => (
                            <div className=' w-full flex flex-col gap-5' key={index}>
                                <div className=' flex justify-between w-full'>
                                    <div className=' flex gap-2 w-full overflow-hidden items-center'>
                                        <div className=' w-14 h-14 rounded-full overflow-hidden flex justify-center items-center'>
                                            <Avatar>
                                                <AvatarImage src={review.img} />
                                                <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
                                            </Avatar>

                                        </div>

                                        <div className=' flex flex-col items-start w-auto justify-center'>
                                            <h5 className=' text-lg font-bold'>{review.name}</h5>
                                            {/* <p className='text-sm font-normal'>{review.role}</p> */}
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-center items-center w-[86px]'>
                                        <StarRate rate={review.rate} />
                                    </div>
                                </div>
                                <div className=" w-full overflow-hidden flex">
                                    <p className=' text-sm'>
                                        {review.description}
                                    </p>
                                </div>
                            </div>
                        ))}

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