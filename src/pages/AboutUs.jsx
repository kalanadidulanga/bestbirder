import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import transition from "@/transition";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdEmojiPeople } from "react-icons/md";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { SOCIALS } from "@/constants";

const AboutUs = () => {


  return (
    <>
      {/* <Navbar /> */}

      <PageHeader name="About Us" />

      <section className=" w-full h-auto overflow-hidden">
        <div className="bg-image5 bg-cover bg-bottom w-full">
          <div className=" max-container padding-container flexCenter flex-col w-full">
            <h1 className=" bold-32 lg:bold-52 mt-24 mb-10 flex gap-3 items-center">
              <span>
                <MdEmojiPeople />
              </span>
              About Us
            </h1>

            <div className=" flex flex-col gap-7 md:gap-10 lg:gap-14 mb-24 w-full h-auto">
              {/* <p className=' max-w-4xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide'>
              We understand our duty and responsibility to make our clients satisfied and give a comfortable travel experience to explore Sri Lanka’s wildlife and nature. We will offer an experience and knowledgeable tour guide and comfortable vehicle during your whole tour.
              </p> */}

              <div className=" flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-muted-foreground">
                    Vision
                  </h4>
                  <p className=" text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Our vision to be the most faithful and preferred bird and
                    wildlife tour agency in Sri Lanka.
                  </p>
                </div>

                <div className="flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-muted-foreground">
                    Mission
                  </h4>
                  <p className=" text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    To offer an excellent and responsible service that will always
                    give an unforgettable experience with nature.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col flex-1 items-center">
                <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                  Tour Operator
                </h4>
                <div className=" max-w-4xl rounded-xl flex items-center justify-center my-5">
                  <img
                    src="/1655642162.jpg"
                    alt=""
                    className=" object-cover object-center rounded-xl hover:shadow-xl hover:brightness-90 transition-all duration-300"
                  />
                </div>
                <h5 className="bold-18 md:bold-20 lg:bold-32 mb-1 lg:mb-2">
                  Mr. Indika Peabotuwage
                </h5>
                {/* <p className=" max-w-4xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                  I am Indika Peabotuwage and the founder of the Best Birder
                  tour group in Sri Lanka. I also worked as a field biologist
                  and an ornithologist in South and East Asia. I have been
                  working in wildlife research and tourism for nearly 15 years.
                  My studies mainly focus on wildlife conservation and
                  management at the Open University of Sri Lanka and the
                  Postgraduate Institute of Archeology, University of Kelaniya,
                  Sri Lanka. I have been working at the Department of Botany,
                  Faculty of Science, University of Peradeniya and the Young
                  Zoologist Association of Sri Lanka National Zoo, Sri Lanka, as
                  well as Xishuangbanna Tropical Botanical Garden, Chinese
                  Academy of Sciences and the College of Forestry, Guangxi
                  University in China. Furthermore, I have gained knowledge and
                  experience with tropical bird flocks, migratory birds, and flora in
                  South and East Asia.
                </p> */}
                <p className=" max-w-4xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                  Dhammithra Samarasinghe is one of the talented tour operators in Sri Lanka. He has been working in Bird and Wildlife tourism field nearly 25 years in the country. He has gained knowledge of both fauna and flora in Sri Lanka and also an experienced wildlife researcher in academic and conservation level including local and international platform. Where natural history is concerned his knowledge is sound and scientific and he knows where to creep and crawl in search of the rare jewel of the client desire.
                </p>
                {/* <p className=' max-w-4xl text-left regular-14 md:regular-16 lg:regular-18 tracking-wide ml-10 mt-3'>
                  Ferry Slik <br />
                  Professor &amp; Curator of the UBD Herbarium <br />
                  Faculty of Science, <br />
                  Universiti Brunei Darussalam, <br />
                  Jln Tungku Link, Gadong, BE1410, Brunei Darussalam. <br />
                </p> */}
              </div>

              <div className=" flex-col lg:flex-row flex w-full h-auto gap-5 md:gap-8 lg:gap-10">
                <div className=" flex flex-col flex-1">
                  <div className=" rounded-md shadow-xl max-w-[400px] max-h-[300px] overflow-hidden w-full h-auto grid place-items-center">
                    <img src="/images/persons/Aiwu.jpg" alt="aiwu" className=" w-full h-full object-cover" />
                  </div>
                  <div className=" flex flex-col mt-3">
                    <p className=" text-lg font-bold">
                      Professor Jiang Aiwu
                    </p>
                    <p className=" text-muted-foreground">
                      College of Forestry
                    </p>
                    <p className=" text-muted-foreground">
                      Behavioral and Community Ecology, Conservation Biology Group
                    </p>
                    <p className=" text-muted-foreground">
                      College of Forestry, Guangxi University
                    </p>
                    <p className=" text-muted-foreground">
                      Nanning, PR China.
                    </p>
                  </div>
                </div>

                <div className=" flex flex-col flex-1">
                  <div className=" rounded-md shadow-xl max-w-[400px] max-h-[300px] overflow-hidden w-full h-auto grid place-items-center">
                    <img src="/images/persons/Emileo.jpg" alt="Emileo" className=" w-full h-full object-cover" />
                  </div>
                  <div className=" flex flex-col mt-3">
                    <p className=" text-lg font-bold">
                      Dr. Emilio Pagani-Nunez
                    </p>
                    <p className=" text-muted-foreground">
                      School of Applied Science
                    </p>
                    <p className=" text-muted-foreground">
                      Edinburgh Napier University
                    </p>
                    <p className=" text-muted-foreground">
                      Scotland, United Kingdom.
                    </p>
                  </div>
                </div>

                <div className=" flex flex-col flex-1">
                  <div className=" rounded-md shadow-xl max-w-[400px] max-h-[300px] overflow-hidden w-full h-auto grid place-items-center">
                    <img src="/images/persons/Aiwu.jpg" alt="aiwu" className=" w-full h-full object-cover" />
                  </div>
                  <div className=" flex flex-col mt-3">
                    <p className=" text-lg font-bold">
                      Professor D.M. Deepthi Yakandawala
                    </p>
                    <p className=" text-muted-foreground">
                      Senior Professor
                    </p>
                    <p className=" text-muted-foreground">
                      Department of Botany
                    </p>
                    <p className=" text-muted-foreground">
                      Faculty of Science, University of Peradeniya
                    </p>
                    <p className=" text-muted-foreground">
                      Sri Lanka.
                    </p>
                  </div>
                </div>

                <div className=" flex flex-col flex-1">
                  <div className=" rounded-md shadow-xl max-w-[400px] max-h-[300px] overflow-hidden w-full h-auto grid place-items-center">
                    <img src="/images/persons/Dhammithra.jpg" alt="aiwu" className=" w-full h-full object-cover" />
                  </div>
                  <div className=" flex flex-col mt-3">
                    <p className=" text-lg font-bold">
                      Professor Jiang Aiwu
                    </p>
                    <p className=" text-muted-foreground">
                      College of Forestry
                    </p>
                    <p className=" text-muted-foreground">
                      Behavioral and Community Ecology, Conservation Biology Group
                    </p>
                    <p className=" text-muted-foreground">
                      College of Forestry, Guangxi University
                    </p>
                    <p className=" text-muted-foreground">
                      Nanning, PR China.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full h-auto overflow-hidden bg-white">
        <div className=" max-container padding-container">
          <div className=" flex flex-col py-24">
            <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
              Contacts
            </h4>
            <p className=" max-w-4xl text-left bold-16 md:bold-18 lg:bold-20 tracking-wide">
              Postal Address:
            </p>
            <p className=" max-w-4xl text-left regular-14 md:regular-16 lg:regular-18 tracking-wide">
              662/19, Muttettuwa Watta, Koongahagedara, Kuliyapiyiya, 60200, Sri
              Lanka
            </p>

            <p className=" max-w-4xl text-left bold-16 md:bold-18 lg:bold-20 tracking-wide mt-5">
              Email:
            </p>
            <p className=" max-w-4xl text-left regular-14 md:regular-16 lg:regular-18 tracking-wide">
            info@bestbirdersl.com / bestbirdersl@gmail.com
            </p>

            <p className=" max-w-4xl text-left bold-16 md:bold-18 lg:bold-20 tracking-wide mt-5">
              Hotline:
            </p>
            <p className=" max-w-4xl text-left regular-14 md:regular-16 lg:regular-18 tracking-wide">
              +94716362389 / +94772723796
            </p>

            <ul className=" regular-14 flex gap-4 text-gray-30 mt-5">
              {SOCIALS.links.map((link) => (
                <Link
                  to={link.href}
                  key={link.src}
                  className=" hover:scale-125 duration-300"
                >
                  <img src={link.src} alt="logo" width={24} height={24} />
                </Link>
              ))}
            </ul>

            <Button
              asChild
              className=" w-[180px] mt-10 py-7 bg-primary2 hover:bg-primary text-white rounded-xl text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              size={"lg"}
            >
              <Link to="/contact_us" className="">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default AboutUs;
