import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import transition from '@/transition';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <section className=' bg-banner1 bg-cover bg-bottom'>
        <div className=' max-container padding-contaoner py-24 overflow-hidden'>
          <div className=' flex flex-col items-center justify-center gap-4'>
            <h2 className=' text-white text-6xl font-bold tracking-wide'>About Us</h2>
            <div className=' flex items-center gap-3'>
              <div className=' bg-green-500 rounded-full p-3 flex justify-center items-center'><FaHome color='white' size={20} /></div>
              <Link to={'/'} className=' text-white regular-18 cursor-pointer hover:underline'>Home</Link>
              <IoIosArrowForward color='white' size={25} />
              <p className=' text-white regular-18'>About Us</p>
            </div>
          </div>
        </div>
      </section>

      <div>AboutUs</div>

      <Footer />
    </>
  )
}

export default AboutUs;