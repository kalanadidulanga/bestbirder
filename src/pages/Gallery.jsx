import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useRef, useState } from 'react'
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
import PageHeader from '@/components/PageHeader';
import axios from 'axios';
import { BACKEND_URL } from '@/constants';
import toast from 'react-hot-toast';
import Loading from '@/components/Loading';
import PaginationSection from '@/components/PaginationSection';

const Gallery = () => {

  // useRef

  const [key, setkey] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [dataSet, setDataSet] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentDataSet = dataSet.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/get-gallery-admin.php`);
        if (response.data.success) {
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


  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      {/* <Navbar /> */}

      <PageHeader name="Gallery" image={"/images/others/3.jpg"} className={" object-bottom"} />

      <section className="w-full overflow-hidden bg-white">
        <div className=" w-full   bg-cover bg-center  py-24">
          <div className="max-container padding-container items-center flex flex-col">
            <h4 className=" font-kalam regular-24 md:regular-32 lg:regular-40 text-primary3">BestBirder</h4>
            <h2 className=" bold-32 md:bold-40 lg:bold-52 mb-10">Image Gallery</h2>
            {isLoading && (
              <Loading className={" h-[20vh]"} />
            )}
            <div className="image-gallery columns-2 lg:columns-4">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                {currentDataSet?.map((src, index) => (
                  <a href={src.img_url} key={index}>
                    <img alt={src.title} src={src.img_url} className=" hover:brightness-75" />
                  </a>
                ))}
              </LightGallery>
            </div>

            <div className=" flex justify-center mt-10">
              <PaginationSection
                totalPosts={dataSet.length}
                postsPerPage={postsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  )
}

export default Gallery