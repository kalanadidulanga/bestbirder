import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useRef, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

import { MdConnectWithoutContact } from "react-icons/md";
import emailjs from '@emailjs/browser';
import PageHeader from '@/components/PageHeader';
import { BACKEND_URL, SOCIALS } from '@/constants';
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactUs = () => {

  const [loading, setLoading] = useState(false)
  const [mailBody, setMailBody] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    arrivalDate: "",
    depatureDate: "",
    message: "",
  })

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_c5jmh2o', 'template_zo066ky', form.current, 'qwo2mflylR5fpOk4r')
  //     .then((result) => {
  //       console.log(result.text);
  //       toast({
  //         title: "Success",
  //         description: "Mail Send Successfully...",
  //       })
  //     }, (error) => {
  //       console.log(error.text);
  //       toast({
  //         variant: "destructive",
  //         title: "Error",
  //         description: "Somethings went wrong...",
  //       })
  //     });
  // };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true)

    // console.log(mailBody);

    try {
      const response = await axios.post(`${BACKEND_URL}/contact.php`, mailBody)
      if (response.data.success) {
        toast.success(response.data.message)
        setMailBody({
          name: "",
          email: "",
          country: "",
          mobile: "",
          arrivalDate: "",
          depatureDate: "",
          message: "",
        })
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <>

      {/* <Navbar /> */}

      <PageHeader name="Contact Us" image={"/images/others/7.jpg"} className={"object-center"} />

      <section className=' w-full h-auto overflow-hidden'>
        <div className=' bg-cover bg-center w-full'>
          <div className=' max-container padding-container flexCenter flex-col w-full'>
            <h1 className=' bold-32 lg:bold-52 mt-24 mb-10 flex gap-3 items-center'><span><MdConnectWithoutContact /></span>Get In Touch</h1>

            <form ref={form} onSubmit={sendEmail} className=' w-full flex flex-col items-center mb-24 gap-5'>

              {/* <input type="text" required/> */}

              <div className=' flex flex-col md:flex-row gap-5 w-full'>
                <div className="grid w-full max-w-2xl items-center gap-1.5">
                  <label htmlFor="name" className='medium-18'>Name</label>
                  <Input value={mailBody.name} onChange={(e) => setMailBody((prev) => ({ ...prev, name: e.target.value }))} type="text" id="name" placeholder="Name" className=" " name="from_name" />
                </div>

                <div className="grid w-full max-w-2xl items-center gap-1.5">
                  <label htmlFor="country" className='medium-18'>Country</label>
                  <Input value={mailBody.country} onChange={(e) => setMailBody((prev) => ({ ...prev, country: e.target.value }))} type="text" id="country" placeholder="Country" className=" " name="country" />
                </div>
              </div>

              <div className=' flex flex-col md:flex-row gap-5 w-full'>
                <div className="grid w-full max-w-2xl items-center gap-1.5">
                  <label htmlFor="email" className='medium-18'>Email</label>
                  <Input value={mailBody.email} onChange={(e) => setMailBody((prev) => ({ ...prev, email: e.target.value }))} type="email" id="email" placeholder="Email" className=" " name="email" />
                </div>

                <div className="grid w-full max-w-2xl items-center gap-1.5">
                  <label htmlFor="mobile" className='medium-18'>Mobile</label>
                  <Input value={mailBody.mobile} onChange={(e) => setMailBody((prev) => ({ ...prev, mobile: e.target.value }))} type="text" id="mobile" placeholder="Mobile" className=" " name="mobile" />
                </div>
              </div>

              <div className=' flex flex-col md:flex-row gap-5 w-full'>
                <div className="grid w-full max-w-2xl items-center gap-1.5">
                  <label htmlFor="arival" className='medium-18'>Arival Date</label>
                  <Input value={mailBody.arrivalDate} onChange={(e) => setMailBody((prev) => ({ ...prev, arrivalDate: e.target.value }))} type="date" id="arival" placeholder="Arival Date" className=" py-2" name="arival" />
                </div>

                <div className="grid w-full max-w-2xl items-center gap-1.5">
                  <label htmlFor="depature" className='medium-18'>Depature Date</label>
                  <Input value={mailBody.depatureDate} onChange={(e) => setMailBody((prev) => ({ ...prev, depatureDate: e.target.value }))} type="date" id="depature" placeholder="Depature Date" className=" py-2" name="depature" />
                </div>
              </div>

              <div className="grid w-full max-w-4xl items-center gap-1.5">
                <label htmlFor="msg" className='medium-18'>Message</label>
                <Textarea value={mailBody.message} onChange={(e) => setMailBody((prev) => ({ ...prev, message: e.target.value }))} type="msg" id="msg" placeholder="Your Message" className=" " name="message" />
              </div>

              {loading ? (
                <Button asChild disabled={loading} variant="secondary" size={"lg"}>
                  <label className="">Sending...</label>
                </Button>
              ) : (
                <Button asChild disabled={loading} type="submit" onClick={sendEmail} className=" cursor-pointer w-[180px] mt-10 py-7 bg-primary2 hover:bg-primary text-white rounded-xl text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-200" size={"lg"}>
                  <label className="">{loading ? "Sending..." : "Send Message"}</label>
                </Button>
              )}


            </form>
          </div>
        </div>
      </section>

      <section className=' w-full h-auto overflow-hidden bg-white'>
        <div className=' max-container padding-container'>
          <div className=' flex flex-col py-24'>
            <h4 className=' bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary'>Contacts</h4>
            <p className=' max-w-4xl text-left bold-16 md:bold-18 lg:bold-20 tracking-wide'>Postal Address:</p>
            <p className=' max-w-4xl text-left regular-14 md:regular-16 lg:regular-18 tracking-wide'>662/19, Muttettuwa Watta, Koongahagedara, Kuliyapitiya, 60200, Sri Lanka</p>

            <p className=' max-w-4xl text-left bold-16 md:bold-18 lg:bold-20 tracking-wide mt-5'>Email:</p>
            <p className=' max-w-4xl text-left regular-14 md:regular-16 lg:regular-18 tracking-wide'>info@bestbirdersl.com / bestbirdersl@gmail.com</p>

            <p className=' max-w-4xl text-left bold-16 md:bold-18 lg:bold-20 tracking-wide mt-5'>Hotline:</p>
            <p className=' max-w-4xl text-left regular-14 md:regular-16 lg:regular-18 tracking-wide'>+94716362389 / +94772723796</p>

            <ul className=' regular-14 flex gap-4 text-gray-30 mt-5'>
              {SOCIALS.links.map((link) => (
                <Link to={link.href} key={link.src} className=" hover:scale-125 duration-300">
                  <img src={link.src} alt='logo' width={24} height={24} />
                </Link>
              ))}
            </ul>

            {/* <Button asChild className=" w-[180px] mt-10 py-7 bg-green-500 hover:bg-emerald-500 text-white rounded-xl text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300" size={"lg"}>
              <Link to="/contact_us" className="">Contact Us</Link>
            </Button> */}

          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  )
}

export default ContactUs