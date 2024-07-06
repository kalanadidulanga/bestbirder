import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { BACKEND_URL, HOME_CAROUSEL, REVIEWS, TOURS_HOME } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { FaStar } from "react-icons/fa";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { IMAGE_GAL } from "@/constants/imageGal";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import GoToTop from "@/components/GoToTop";
import toast from "react-hot-toast";
import axios from "axios";
import PaginationSection from "@/components/PaginationSection";
import Loading from "@/components/Loading";


const Home = () => {
    const navigate = useNavigate();

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    const onInit = () => {
        // console.log("lightGallery has been initialized");
    };

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [review, setReview] = useState("");

    const [isReviewOpen, setIsReviewOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [key, setkey] = useState(true);
    const [isLoading2, setIsLoading2] = useState(false);
    const [dataSet, setDataSet] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentDataSet = dataSet.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
        const loadReviews = async () => {
            setIsLoading2(true);
            try {
                const response = await axios.get(`${BACKEND_URL}/get-reviews-client.php`);
                if (response.data.success) {
                    setDataSet(response.data.data);
                } else {
                    toast.error(response.data.message || 'Error fetching reviews');
                }
            } catch (error) {
                toast.error('Error fetching reviews:', error);
            } finally {
                setIsLoading2(false);
            }
        }

        loadReviews()
    }, [key])

    const handleReviewSubmtion = async () => {
        setIsLoading(true);
        let payload = {
            fname: fname,
            lname: lname,
            review: review,
            stars: rating
        }

        if (!fname || !lname || !review || !rating) {
            toast.error('Please fill all the fields');
            return
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/add-review.php`, payload);

            if (response.data.success) {
                toast.success(response.data.message);
                setFname("");
                setLname("");
                setReview("");
                setRating(null);
                setIsReviewOpen(false);
                setkey(!key);
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.error('There was an error adding the review!', error);
        } finally {
            setIsLoading(false);
        }

        // console.log(payload);
    };


    return (
        <>
            <GoToTop />
            {/* <Navbar /> */}

            <section className=" w-full lg:h-[40vw] md:h-[50vw] h-[60vw] flexCenter overflow-hidden">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full h-full"
                // onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="">
                        {HOME_CAROUSEL.map((link) => (
                            <CarouselItem key={link.src} className="">
                                <div
                                    className=" w-full lg:h-[40vw] md:h-[50vw] h-[60vw] flex items-center justify-center overflow-hidden bg-no-repeat bg-top bg-cover brightness-90"
                                    style={{
                                        backgroundImage: `url(${link.src})`,
                                    }}
                                >
                                    {/* <img src={link.src} alt="homeimg" className=" object-cover w-full h-full"/> */}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className=" invisible lg:visible" />
                    <CarouselNext className=" invisible lg:visible" />
                </Carousel>

                <div className=" absolute z-30 w-full lg:h-[40vw] md:h-[50vw] h-[60vw] overflow-hidden bg-black/30">
                    <div className="flex justify-start items-end w-full h-full max-container padding-container">
                        <div className=" flex justify-center flex-col max-w-[800px] py-5">
                            <h3
                                className=" text-white bold-20 md:bold-40 lg:bold-64 tracking-normal "
                                style={{ textShadow: "0px 0px 10px white" }}
                            >
                                Travel With
                            </h3>
                            <h1
                                className=" text-white bold-40 md:bold-64 lg:bold-88 tracking-widest uppercase md:mb-10"
                                style={{ textShadow: "0px 0px 10px white" }}
                            >
                                BestBirder
                            </h1>
                            {/* <p
                                className=" text-white bold-14 md:bold-18 lg:bold-20 leading-loose pt-3 md:pt-4 lg:pt-5"
                                style={{ textShadow: "0px 0px 10px white" }}
                            >
                                best birder is a government registered company
                            </p> */}
                            {/* <p className=" text-white regular-14 md:regular-18 lg:regular-20 leading-loose pt-5" style={{ textShadow: '0px 0px 10px white' }}>
                                Your gateway to Sri Lanka's avian wonders. 15+ years of expertise, crafting ultimate wildlife & birding adventures for nature lovers. <span>best birder is a government registered company</span>
                            </p> */}
                            {/* <p className=" text-white regular-14 lg:regular-20 leading-normal inline-flex md:hidden pt-5" style={{ textShadow: '0px 0px 10px white' }}>
                                Your gateway to Sri Lanka's avian wonders. 15+ years of expertise, crafting ultimate wildlife & birding adventures for nature lovers.
                            </p> */}
                            {/* <Button variant="default" className="mt-5 max-w-52 md:mb-10" onClick={() => { navigate('/about_us') }}>About us</Button> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className=" w-full h-auto overflow-hidden">
                <div className=" w-full h-auto py-24 bg-primary2/20">
                    <div className="max-container padding-container w-full h-full">
                        <div className=" flex flex-col lg:flex-row gap-5 md:gap-8 lg:gap-10">
                            <div className=" relative flex flex-col flex-1 items-center justify-center overflow-hidden rounded-lg w-full h-auto min-h-[600px] lg:min-w-[400px]">
                                {/* <div className=" w-full max-w-[350px] h-[70%] absolute top-0 right-0 rounded-lg overflow-hidden">
                                    <img src="/images/persons/conference_photo.jpg" alt="conference" className=" h-full object-cover w-full object-center" />
                                </div> */}
                                <div className=" w-full rounded-xl overflow-hidden">
                                    <img src="/images/persons/research.jpg" alt="conference" className=" h-full object-cover w-full object-center" />
                                </div>
                            </div>
                            <div className=" flex flex-col flex-1 justify-center ">
                                <h4 className=" font-bold text-center text-xl md:text-2xl lg:text-3xl tracking-wide text-primary">
                                    Research and Conservation
                                </h4>
                                <p className=" text-justify text-sm md:text-base mt-5 indent-16">
                                    Today, half of the forests have been lost due to deforestation, agriculture, forest industry and urbanization in the world and its continues to lose 15million hectares of forests each year (Hermosilla A.C. 2000). We highly believe and consider eco-friendly tourism in Sri Lanka as well as in the world. It spurs global education and encourages awareness of the issues of habitat degradation and biodiversity loss. For that, we also conduct biodiversity conservation and research projects in Sri Lanka. In addition we published peer reviews in local and international journals of <a href="https://www.researchgate.net/profile/Indika-Peabotuwage" target="_blank" rel="noopener noreferrer" className=" text-primary3 hover:underline">our research findings</a> As well as we do animal rescue programs when it's needed in the country and give the priority to save wild animals in different situations. We addressed school students and public audiences to how important biodiversity conservation is at the moment on a global scale. Furthermore, we are contributing our knowledge and data with government and non-government organizations for their activities (Ex: National Red List) in conservation. We provide clay bottles for clients to bring a message and reduce plastic usage. At the end, we bring our conservation message to our clients during their tours and let them understand how important biodiversity conservation and eco-friendly tourism is on the planet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full overflow-hidden">
                <div className=" w-full  bg-tour bg-cover bg-center">
                    <div className=" bg-white/90   py-24">
                        <div className="max-container padding-container items-center flex flex-col">
                            <h4 className=" font-kalam regular-24 md:regular-32 lg:regular-40 text-primary3">
                                BestBirder
                            </h4>
                            <h2 className=" bold-32 md:bold-40 lg:bold-52 tracking-wide text-primary">
                                Tours
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-14 mb-16 pt-10">
                                {TOURS_HOME.map((props, index) => (
                                    <Card
                                        key={index}
                                        className="backdrop-blur-sm bg-white/60  w-full"
                                    >
                                        <CardHeader>
                                            <CardTitle className="py-3 text-slate-600">{props.title}</CardTitle>
                                            <div className=" w-full h-64 flex justify-center items-center overflow-hidden rounded-xl">
                                                <img
                                                    src={props.image}
                                                    alt="bird"
                                                    className=" object-center object-cover rounded-xl hover:scale-105 transition-all duration-200 hover:brightness-90"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className=" pb-24">
                                            <div className=""></div>
                                            <p className="indent-10 line-clamp-6 text-justify regular-16 tracking-wide leading-relaxed">
                                                {props.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex flex-col absolute inset-x-0 bottom-0">
                                            <div className=' border w-full m-0 p-0 border-gray'></div>
                                            <Link to={`/tours/${props.title}`} className='mt-5 cursor-pointer'><p className=' bold-18 hover:text-primary transition-all duration-200'>View</p></Link>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                            <Button
                                asChild
                                className=" w-[180px] py-7 bg-primary hover:bg-primary2 text-white rounded-xl text-lg hover:shadow-lg hover:shadow-primary2/50 transition-all duration-300"
                                size={"lg"}
                            >
                                <Link to="/tours" className="">
                                    All Tours
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flexCenter overflow-hidden">
                <div className=" bg-white w-full h-full">
                    <div className="max-container padding-container h-full py-24">
                        <div className=" flex flex-col gap-2 lg:gap-4">
                            <h1
                                className="bold-32 lg:bold-40 mb-3 lg:mb-7 text-primary3"
                            >
                                Bird Migration
                            </h1>

                            <p
                                className=" regular-14 lg:regular-18 text-gray-500 tracking-wide leading-relaxed text-justify indent-8 lg:indent-20"

                            >
                                Migration is one of the most fascinating phenomena in nature, demonstrated by every major animal taxon, which maximizes survival and reproductive success through the utilization of key habitats, food sources and breeding grounds and the avoidance of adverse environmental conditions. Recent evidence is that every four billion migratory birds make short or long-distance migrations. Many species and large numbers of birds are annually moved to tropics along the East Asian flyway and the Central Asian flyway. Sri Lanka is one of the great destinations of migratory birds. There are three major migration routes to Sri Lanka.  Western route, Eastern route and Andaman route. They are moving along the Central Asian flyway to Sri Lanka and start their southward journey in mid-August and their departures begin in late march.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" max-container padding-container">
                {/* <div className=" w-full bg-white py-10 my-24 rounded-2xl  bg-newsletter bg-cover bg-center"> */}
                <div className=" flex flex-col lg:flex-row p-5 my-24">
                    <div className="flex p-10 flex-1 items-center justify-center">
                        <img
                            src="/undraw_stranded_traveler_pdbw.svg"
                            alt="about-img"
                            className=""
                        />
                    </div>
                    <div className=" gap-5 lg:gap-10 flex flex-1 flex-col lg:justify-center">
                        <h4 className=" font-kalam regular-24 md:regular-32 lg:regular-40 text-primary3">
                            About BestBirder
                        </h4>
                        <h2 className=" bold-32 md:bold-40 lg:bold-52">
                            Best Travel Agency in Sri Lanka
                        </h2>
                        <p className=" regular-16 md:regular-18 lg:regular-20 text-black/80">
                            Best Birder is a group of wildlife researchers and bird experts in
                            Sri Lanka with over 15 years of experience. We wish to give an
                            ultimate wildlife and birding experience for anyone who loves to
                            enjoy the unique and wondrous Wildlife in Sri Lanka.
                        </p>
                        <div className=" flex gap-3 flex-col md:flex-row">
                            <Button
                                asChild
                                className=" w-[180px] py-7 bg-primary hover:bg-primary2 text-white rounded-xl text-lg hover:shadow-lg hover:shadow-primary2/50 transition-all duration-300"
                                size={"lg"}
                            >
                                <Link to="/about_us" className="">
                                    About us
                                </Link>
                            </Button>

                            <Button
                                asChild
                                className=" w-[180px] py-7 bg-primary2 hover:bg-primary text-white rounded-xl text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                                size={"lg"}
                            >
                                <Link to="/contact_us" className="">
                                    Contact Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>


            {/* review section  */}
            <section className=" w-full overflow-hidden bg-primary2/20">
                <div className=" max-container padding-container w-full py-24">
                    <div className=' flex flex-col w-full h-auto'>

                        <div className=" flex flex-col gap-3 w-full h-auto items-center pb-10">
                            <h1 className=" text-5xl md:text-6xl font-bold text-center text-primary">Our Reviews</h1>
                            <p className=" text-sm text-gray-700 text-center">All of your reviews have a personal touch</p>
                        </div>

                        {isLoading2 && (
                            <Loading className={" h-[20vh]"} />
                        )}


                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                            {currentDataSet?.map((review, index) => (
                                <div className=' w-full flex flex-col gap-5' key={index}>
                                    <div className=' flex justify-between w-full'>
                                        <div className=' flex gap-2 w-full overflow-hidden items-center'>
                                            {/* <div className=' w-14 h-14 rounded-full overflow-hidden flex justify-center items-center'>
                                                <Avatar>
                                                    <AvatarImage src={review.img} />
                                                    <AvatarFallback>{review.fname?.slice(0, 1)}{review.lname?.slice(0, 1)}</AvatarFallback>
                                                </Avatar>
                                            </div> */}

                                            <div className=' flex flex-col items-start w-auto justify-center'>
                                                <h5 className=' text-lg font-bold'>{review.fname}{" "}{review.lname}</h5>
                                                {/* <p className='text-sm font-normal'>{review.role}</p> */}
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-center items-center w-[86px]'>
                                            <StarRate rate={review.stars} />
                                        </div>
                                    </div>
                                    <div className=" w-full overflow-hidden flex">
                                        <p className=' text-sm'>
                                            {review.review}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className=" flex justify-center mt-5">
                            <PaginationSection
                                totalPosts={dataSet.length}
                                postsPerPage={postsPerPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>

                        <div className=" flex flex-col justify-center items-center md:flex-row  w-full mt-10 gap-5">

                            <Link to={'/all_reviews'} className=' bg-primary text-white px-10 py-4 rounded-full hover:bg-primary2 transition-all duration-200 hover:shadow-lg hover:shadow-primary2 w-full max-w-56 text-center'>All Reviews</Link>

                            <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
                                {/* <div className=' w-full flex items-center justify-center'> */}
                                <DialogTrigger className=' bg-primary2 text-white px-10 py-4 rounded-full hover:bg-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary w-full max-w-56 text-center'>Add Your Review</DialogTrigger>
                                {/* </div> */}
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8">Add Your <span className=' text-color1'>Review</span></DialogTitle>
                                        <DialogDescription>
                                            <div className=' w-full h-auto flex flex-col items-center gap-5'>
                                                <div className=' flex flex-col w-full gap-3'>
                                                    <p className=' text-sm text-start'>Click to Rate</p>
                                                    <div className=' flex gap-3'>
                                                        {[...Array(5)].map((star, index) => {
                                                            const currentRating = index + 1;

                                                            return (
                                                                <label key={index}>
                                                                    <input
                                                                        type="radio"
                                                                        name="rating"
                                                                        value={currentRating}
                                                                        onClick={() => { setRating(currentRating) }}
                                                                        className=' hidden'
                                                                    />
                                                                    <FaStar
                                                                        size={35}
                                                                        className=' cursor-pointer'
                                                                        color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                                        onMouseEnter={() => setHover(currentRating)}
                                                                        onMouseLeave={() => setHover(null)}
                                                                    />
                                                                </label>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className=' text-sm text-start text-yellow-500'>Your Rating is <span className=' font-bold'>{rating}</span></div>
                                                </div>
                                                <div className=" flex flex-col gap-3 md:flex-row w-full">
                                                    <div className=' flex flex-col gap-2 w-full'>
                                                        <label htmlFor="fname" className=' text-sm text-start'>First Name</label>
                                                        <div className=' flex w-full h-auto shadow-lg overflow-hidden rounded-xl border-2 items-center justify-center'>
                                                            <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" name="fname" id="fname" className=' w-full focus:outline-none py-3 px-2 bg-[#F4FEFF]'></input>
                                                        </div>
                                                    </div>
                                                    <div className=' flex flex-col gap-2 w-full'>
                                                        <label htmlFor="lname" className=' text-sm text-start'>Last Name</label>
                                                        <div className=' flex w-full h-auto shadow-lg overflow-hidden rounded-xl border-2 items-center justify-center'>
                                                            <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" name="lname" id="lname" className=' w-full focus:outline-none py-3 px-2 bg-[#F4FEFF]'></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' flex flex-col gap-2 w-full'>
                                                    <div className=" flex justify-between">
                                                        <label htmlFor="review" className=' text-sm text-start'>Your Review</label>
                                                        <p className=" text-sm text-red-500">Max words 50 *</p>
                                                    </div>
                                                    <div className=' flex w-full h-auto shadow-xl overflow-hidden rounded-xl border-2 items-center justify-center'>
                                                        <textarea value={review} onChange={(e) => setReview(e.target.value)} name="review" id="review" className=' w-full focus:outline-none py-2 px-2 bg-[#F4FEFF]' rows={5}></textarea>
                                                    </div>
                                                </div>

                                                <Button disabled={!fname || !lname || !review || !rating || rating === 0 || isLoading} onClick={handleReviewSubmtion} className='bg-primary text-white px-10 py-4 rounded-full hover:bg-primary2 transition-all duration-200 hover:shadow-lg hover:shadow-primary2'>Add Your Review</Button>

                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>


                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full overflow-hidden bg-white">
                <div className=" w-full   bg-cover bg-center  py-24">
                    <div className="max-container padding-container items-center flex flex-col">
                        <h4 className=" font-kalam regular-24 md:regular-32 lg:regular-40 text-primary3">
                            BestBirder
                        </h4>
                        <h2 className=" bold-32 md:bold-40 lg:bold-52 mb-10">
                            Image Gallery
                        </h2>
                        <div className=" columns-2 lg:columns-4 image-gallery">
                            <LightGallery
                                onInit={onInit}
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                            >
                                {IMAGE_GAL.map((src, index) => (
                                    <a href={src.src} key={index}>
                                        <img
                                            alt={src.alt}
                                            src={src.src}
                                            className=" hover:brightness-75"
                                        />
                                    </a>
                                ))}
                            </LightGallery>
                        </div>
                        <Button
                            asChild
                            className=" w-[180px] mt-10 py-7 bg-primary hover:bg-primary2 text-white rounded-xl text-lg hover:shadow-lg hover:shadow-primary2/50 transition-all duration-300"
                            size={"lg"}
                        >
                            <Link to="/gallery" className="">
                                View All
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="w-full flexCenter overflow-hidden bg-banner4 bg-cover bg-top">
                <div className=" bg-primary2/50 w-full h-full">
                    <div className="max-container padding-container h-full py-24">
                        <div className=" flex flex-col gap-2 lg:gap-4 max-w-[900px]">
                            <h1
                                className="bold-32 lg:bold-40 mb-3 lg:mb-7 text-primary"
                            // style={{ textShadow: "0px 0px 5px blue" }}
                            >
                                Sri Lanka
                            </h1>

                            <p
                                className=" regular-14 lg:regular-18 text-white tracking-wide leading-relaxed text-justify indent-8 lg:indent-20"
                            // style={{ textShadow: "0px 0px 5px black" }}
                            >
                                Sri Lanka is a tropical island lies in the Indian Ocean between
                                latitudes 5° and 10° N, and longitudes 79° and 82° E with the
                                total land area of 65610km2. The island contained four major
                                climatic zones (Wet zone, Dry zone, Intermediate zone and
                                Semi-arid zone). The southwestern region of Sri Lanka,
                                encompassing 20000km<sup>2</sup> is the only per humid region in the whole
                                of South Asia. It referred to as a Wet zone of Sri Lanka and
                                receives up to 3000mm of rainfall annually. Sri Lanka, along
                                with the Western Ghats of India is designated as one of the
                                world’s biodiversity hotspots for the uniqueness and the local
                                endemism within. Sri Lanka was part of the ancient Gondwanaland
                                and was located adjacent to the African continent. As well as
                                Sri Lanka’s biodiversity is significantly important both in a
                                regional and global scale. Sri Lanka has the highest species
                                density in the Asian region.
                            </p>

                            <p
                                className=" regular-14 lg:regular-18 text-white tracking-wide leading-relaxed text-justify indent-8 lg:indent-20"
                            // style={{ textShadow: "0px 0px 5px black" }}
                            >
                                Among the many taxa that are found in Sri Lanka, birds are
                                perhaps the most attractive faunal group. Birds have been an
                                integral part of the Sri Lankan culture as they have been
                                featured in our art, music and literature. The influence of
                                western birding and ornithology started to seep into Sri Lankan
                                from the 16th century. And also, Sri Lanka is rich with Amphibians, Mammals,
                                Reptiles, Butterflies, Freshwater Fish and Tropical Flora with
                                many endemics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    );
};

const StarRate = ({ rate }) => {
    const stars = Array(5).fill(0);

    for (let i = 0; i < rate; i++) {
        stars[i] = 1;
    }

    return (
        <>
            {stars.map((star, index) => (
                <FaStar key={index} className={`${star ? 'text-yellow-500' : ''}`} size={16} />
            ))
            }
        </>
    );
}

export default Home;
