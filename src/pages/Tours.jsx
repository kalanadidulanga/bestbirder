import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TOURS } from '@/constants';
import transition from '@/transition';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmojiPeople, MdTravelExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Tours = () => {
  return (
    <>
      {/* <Navbar /> */}

      <PageHeader name="Tours" image={"/images/birds/1.jpg"}/>

      <section className=' w-full h-auto overflow-hidden'>
        <div className='bg-tour bg-cover bg-center w-full'>
          <div className=' bg-white/85'>
            <div className=' max-container padding-container flexCenter flex-col w-full'>
              <h1 className=' bold-32 lg:bold-52 mt-24 mb-10 flex gap-3 items-center'><span><MdTravelExplore /></span>Wildlife Tours</h1>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-14 mb-24 pt-10'>

                {TOURS.map((props, index) => (
                  <Card key={index} className="backdrop-blur-md bg-white/30  w-full">
                    <CardHeader>
                      <CardTitle className="py-3">{props.title}</CardTitle>
                      <div className=' w-full h-64 flex justify-center items-center overflow-hidden rounded-xl'>
                        <img src={props.image} alt="bird" className=' object-center object-cover rounded-xl hover:scale-105 transition-all duration-200 hover:brightness-90' />
                      </div>
                    </CardHeader>
                    <CardContent className=" pb-24">
                      {/* <div className=''></div> */}
                      <p className='indent-10 line-clamp-6 text-justify regular-16 tracking-wide leading-relaxed'>{props.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-col absolute inset-x-0 bottom-0">
                      <div className=' border w-full m-0 p-0 border-gray'></div>
                      <Link to={`/tours/${props.title}`} className='mt-5 cursor-pointer'><p className=' bold-18 hover:text-primary transition-all duration-200'>View</p></Link>
                    </CardFooter>
                  </Card>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  )
}

export default Tours;