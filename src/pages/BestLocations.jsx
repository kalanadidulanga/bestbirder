import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";

const BestLocations = () => {
  return (
    <>

      <Navbar />

      <PageHeader name="Best Locations" />

      <section className=' w-full h-auto overflow-hidden'>
        <div className='bg-image5 bg-cover bg-bottom w-full'>
          <div className=' max-container padding-container flexCenter flex-col w-full'>
            <h1 className=' bold-40 lg:bold-52 mt-24 mb-10 flex gap-3 items-center'><span><FaMapLocationDot /></span>Best Locations</h1>

            <div className=' flex flex-col gap-7 md:gap-10 lg:gap-14 mb-24'>
              <p className=' max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide'>
              Sri Lanka has many bird and wildlife attractive places including different habitats. Especially National Parks and Rain Forests. Some of the most famous sites are Wilpatttu National Park, Yala National Park, Udawalawa National Park, Minneriya National Park, Sigiriya Sanctuary, Bundala National Park, Horton plains National Park, Sinharaja man and biosphere Forest Reserve, Makandawa Rain Forest, Anawilundawal Ramsar wetland and Wankalai Ramsar wetland. Those places are located in Wet zone, Dry zone and Arid zone in Sri Lanka which contains rich diversity in Wildlife.
              </p>

              <div>
                <h4 className=' bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-emerald-500'>Tour Schedules</h4>
                <p className=' max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide'>
                  Usually, we do group tours but also arrange individual tours and any special tours as requested. And also, we are very concerned about your accommodation and foods during the tour. Accommodation will arrange in hotels with very good environment conditions and you may have wonderful Sri Lankan meals. Meals also can change with your special request.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default BestLocations