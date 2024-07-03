import { Button } from '@/components/ui/button';
import { TOURS } from '@/constants';
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleTour = () => {
    const { tour } = useParams();

    const tourData = TOURS.find(item => item.title === tour)

    return (
        <>
            {/* <div>SingleTour {tour}</div> */}
            <div className=' w-full overflow-hidden h-auto'>
                <div className=' max-container padding-container py-24'>
                    <div className=' flex flex-col lg:flex-row gap-5 lg:gap-10'>
                        <div className=' flex flex-1'>
                            <img src={tourData.image} alt={tourData.title} className=' object-cover object-center rounded-xl w-full' />
                        </div>
                        <div className=' flex flex-1 flex-col gap-5'>
                            <h4 className=' text-primary text-2xl font-semibold'>{tourData.title}</h4>
                            <p className=' indent-10 text-justify'>{tourData.description}</p>
                            <Button
                                asChild
                                className=" max-w-[180px] py-6 bg-primary hover:bg-primary2 text-white rounded-xl text-lg hover:shadow-lg hover:shadow-primary2/50 transition-all duration-300"
                                // variant="secondary"
                                // size="lg"
                            >
                                <Link to="/contact_us" >
                                    Contact Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTour