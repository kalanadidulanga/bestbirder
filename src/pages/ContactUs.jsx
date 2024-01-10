import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useRef } from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

import { MdConnectWithoutContact } from "react-icons/md";
import emailjs from '@emailjs/browser';

import { useToast } from "@/components/ui/use-toast"

const ContactUs = () => {

  const form = useRef();
  const { toast } = useToast()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c5jmh2o', 'template_zo066ky', form.current, 'qwo2mflylR5fpOk4r')
      .then((result) => {
        console.log(result.text);
        toast({
          title: "Success",
          description: "Mail Send Successfully...",
        })
      }, (error) => {
        console.log(error.text);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Somethings went wrong...",
        })
      });
  };

  return (
    <>

      <Navbar />

      <section className=' bg-banner1 bg-cover bg-bottom'>
        <div className=' max-container padding-contaoner py-24 overflow-hidden'>
          <div className=' flex flex-col items-center justify-center gap-4'>
            <h2 className=' text-white text-6xl font-bold tracking-wide'>Contact Us</h2>
            <div className=' flex items-center gap-3'>
              <div className=' bg-green-500 rounded-full p-3 flex justify-center items-center'><FaHome color='white' size={20} /></div>
              <Link to={'/'} className=' text-white regular-18 cursor-pointer hover:underline'>Home</Link>
              <IoIosArrowForward color='white' size={25} />
              <p className=' text-white regular-18'>Contact Us</p>
            </div>
          </div>
        </div>
      </section>

      <section className=' w-full h-auto overflow-hidden'>
        <div className=' bg-cover bg-center w-full'>
          <div className=' max-container padding-container flexCenter flex-col w-full'>
            <h1 className=' bold-40 lg:bold-52 mt-24 mb-10 flex gap-3 items-center'><span><MdConnectWithoutContact /></span>Get In Touch</h1>

            <form ref={form} onSubmit={sendEmail} className=' w-full flex flex-col items-center mb-24 gap-5'>

              {/* <input type="text" required/> */}

              <div className="grid w-full max-w-lg items-center gap-1.5">
                <label htmlFor="name" className='medium-18'>Name</label>
                <Input type="text" id="name" placeholder="Name" className=" " name="from_name"/>
              </div>

              <div className="grid w-full max-w-lg items-center gap-1.5">
                <label htmlFor="country" className='medium-18'>Country</label>
                <Input type="text" id="country" placeholder="Country" className=" " name="country" />
              </div>

              <div className="grid w-full max-w-lg items-center gap-1.5">
                <label htmlFor="email" className='medium-18'>Email</label>
                <Input type="email" id="email" placeholder="Email" className=" " name="email" />
              </div>

              <div className="grid w-full max-w-lg items-center gap-1.5">
                <label htmlFor="mobile" className='medium-18'>Mobile</label>
                <Input type="text" id="mobile" placeholder="Mobile" className=" " name="mobile" />
              </div>

              <div className="grid w-full max-w-lg items-center gap-1.5">
                <label htmlFor="arival" className='medium-18'>Arival Date</label>
                <Input type="date" id="arival" placeholder="Arival Date" className=" py-2" name="arival" />
              </div>

              <div className="grid w-full max-w-lg items-center gap-1.5">
                <label htmlFor="depature" className='medium-18'>Depature Date</label>
                <Input type="date" id="depature" placeholder="Depature Date" className=" py-2" name="depature" />
              </div>

              <div className="grid w-full max-w-lg items-center gap-1.5">
                <label htmlFor="msg" className='medium-18'>Message</label>
                <Textarea type="msg" id="msg" placeholder="Your Message" className=" " name="message" />
              </div>

              <Button asChild type="submit" onClick={sendEmail} className=" cursor-pointer w-[180px] mt-10 py-7 bg-green-500 hover:bg-emerald-500 text-white rounded-xl text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-200" size={"lg"}>
                <label className="">Send Message</label>
              </Button>

              
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactUs