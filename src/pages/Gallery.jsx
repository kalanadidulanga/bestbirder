import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useRef } from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import "./style.css";

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { IMAGE_GAL, IMAGE_GAL_PAGE } from "@/constants/imageGal"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';

const Gallery = () => {

  // useRef


  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      <Navbar />

      <section className=' bg-banner1 bg-cover bg-bottom'>
        <div className=' max-container padding-contaoner py-24 overflow-hidden'>
          <div className=' flex flex-col items-center justify-center gap-4'>
            <h2 className=' text-white text-6xl font-bold tracking-wide'>Gallery</h2>
            <div className=' flex items-center gap-3'>
              <div className=' bg-green-500 rounded-full p-3 flex justify-center items-center'><FaHome color='white' size={20} /></div>
              <Link to={'/'} className=' text-white regular-18 cursor-pointer hover:underline'>Home</Link>
              <IoIosArrowForward color='white' size={25} />
              <p className=' text-white regular-18'>Gellery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-white">
        <div className=" w-full   bg-cover bg-center  py-24">
          <div className="max-container padding-container items-center flex flex-col">
            <h4 className=" font-kalam regular-24 md:regular-32 lg:regular-40 text-green-500">BestBirder</h4>
            <h2 className=" bold-32 md:bold-40 lg:bold-52 mb-10">Image Gallery</h2>
            <div className="image-gallery">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                {IMAGE_GAL_PAGE.map((src, index) => (
                  <a href={src.src} key={index}>
                    <img alt={src.alt} src={src.src} className=" hover:brightness-75" />
                  </a>
                ))}
              </LightGallery>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Gallery