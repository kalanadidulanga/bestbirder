import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

import { MdOutlinePolicy } from "react-icons/md";
import PageHeader from '@/components/PageHeader';

const Policy = () => {
  return (

    <>
      {/* <Navbar /> */}

      <PageHeader name="Contact Us"/>

      <section className=' w-full h-auto overflow-hidden'>
        <div className='bg-image5 bg-cover bg-bottom w-full'>
          <div className=' max-container padding-container flexCenter flex-col w-full'>
            <h1 className=' bold-32 lg:bold-52 mt-24 mb-10 flex gap-3 items-center'><span><MdOutlinePolicy /></span>Our Policy</h1>

            <div className=' flex flex-col gap-7 md:gap-10 lg:gap-14 mb-24'>
              <p className=' max-w-4xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide'>
              We understand our duty and responsibility to make our clients satisfied and give a comfortable travel experience to explore Sri Lanka’s wildlife and nature. We will offer an experience and knowledgeable tour guide and comfortable vehicle during your whole tour.
              </p>

              <div>
                <h4 className=' bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-emerald-500'>Tour Schedules</h4>
                <p className=' max-w-4xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide'>
                Usually, we do group tours but also arrange individual tours and any special tours as requested. And also, we are very concerned about your accommodation and foods during the tour. Accommodation will arrange in hotels with very good environment conditions and you may have wonderful Sri Lankan meals. Meals also can change with your special request.
                </p>
              </div>

              <div>
                <h4 className=' bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-emerald-500'>Airport pick up and drop</h4>
                <p className=' max-w-4xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide'>
                We will pick you on your arrival at the airport (CMB) and our tour leaders assist you and start the tour. During the group tours, our guide and assistant with driver give their effort to explore the nature and wildlife in Sri Lanka.
                </p>
              </div>

              <div>
                <h4 className=' bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-emerald-500'>Who we accept</h4>
                <p className=' max-w-4xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide'>
                We won’t support or be a part of any kind of bio piracy, including wildlife collections and persons who plans to do any disturb or harm to the wildlife, heritage and resources. We believe that all peoples will respect to every culture and country and have the unique experience and explore the world.
                </p>
              </div>

              <div>
                <h4 className=' bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-emerald-500'>Payments</h4>
                <p className=' max-w-4xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide'>
                After your tour confirmed, we will send you an electronic invoice for the advance payment. Our advance is 10% of the total price of the tour. We don’t accept credit cards and kindly note that we accept only bank transfers. Balance payment is kindly requested to pay by cash on your arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <Footer /> */}
    </>
  )
}

export default Policy