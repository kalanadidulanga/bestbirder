import { NAV_LINKS } from "@/constants";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import './component.css';

const DashboardNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>

            <div className="bg-footer bg-bottom bg-cover flex flex-col">
                <div className=" z-50">

                    <nav className="flexBetween max-container padding-container relative z-30 py-2">



                        <ul className="hidden h-full lg:gap-8 xl:gap-12 lg:flex">
                            {NAV_LINKS.map((link) => (
                                <NavLink to={link.href} key={link.key} className=" text-sm uppercase tracking-wide  duration-300 font-semibold  text-black/80 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-500">
                                    {link.label}
                                </NavLink>
                            ))}
                        </ul>

                        

                        <button className=" z-50 inline-block cursor-pointer lg:hidden" onClick={toggleNavbar}>
                            {isOpen ? <IoClose size={32} /> :
                                <img
                                    src={`/menu.svg`}
                                    alt="menu"
                                    width={32}
                                    height={32}
                                />
                            }
                        </button>

                        <a href="/" className=" z-0">
                            <img src="/bestbirder-logo.svg" width={130} height={90} alt="logo" />
                        </a>
                    </nav>
                    {/* <div className=" border border-cyan-100"></div> */}
                </div>

                <div className={` z-40 flex flex-col py-10 gap-3 lg:hidden absolute w-full ${isOpen ? '' : ' -mt-96'} bg-bg_color1 shadow-sm duration-300 transition-all ease-in-out`} >
                    {NAV_LINKS.map((link) => (
                        <NavLink to={link.href} key={link.key} className="uppercase tracking-wide focus:text-emerald-500 duration-300 font-semibold text-black/80 flexCenter cursor-pointer transition-all hover:text-green-500">
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* <div className=" border border-cyan-100"></div> */}

        </>
    )
}

export default DashboardNav