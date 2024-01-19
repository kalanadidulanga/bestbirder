import { NAV_LINKS } from "@/constants";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import './component.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className=" bg-[#385b00]">
                <div className="  flex flex-col items-center gap-1 py-4 md:flex-row md:justify-between max-container padding-container">
                    <a href="#" className=" regular-14 text-white flex items-center gap-2"><HiOutlineMail size={18} />peabotuwage@outlook.com<span className=" md:inline-flex hidden">/ peabotuwage@gmail.com</span></a>
                    <a href="+94742764919" className=" regular-14 text-white flex items-center gap-2"><FaWhatsapp size={18} />+940716362389<span className="md:inline-flex hidden">/ +940772723796</span></a>
                </div>
            </div>

            <div className="bg-footer bg-bottom bg-cover">
                <div className=" ">

                    <nav className="flexBetween max-container padding-container relative z-30 py-5">

                        <Link to="/">
                            <img src="/bestbirder-logo.svg" width={130} height={100} alt="logo" />
                        </Link>

                        <ul className="hidden h-full gap-12 lg:flex">
                            {NAV_LINKS.map((link) => (
                                <NavLink to={link.href} key={link.key} className=" uppercase tracking-wide  duration-300 font-semibold  text-black/80 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-500">
                                    {link.label}
                                </NavLink>
                            ))}
                        </ul>

                        <button className=" inline-block cursor-pointer lg:hidden" onClick={toggleNavbar}>
                            {isOpen ? <IoClose size={32} /> :
                                <img
                                    src={`/menu.svg`}
                                    alt="menu"
                                    width={32}
                                    height={32}
                                />
                            }
                        </button>
                    </nav>
                    {/* <div className=" border border-cyan-100"></div> */}
                </div>

                {isOpen && (
                    <div className=" flex flex-col py-4 gap-3 lg:hidden relative shadow-sm duration-300 transition-all ease-in-out ">
                        {NAV_LINKS.map((link) => (
                            <NavLink to={link.href} key={link.key} className="uppercase tracking-wide focus:text-emerald-500 duration-300 font-semibold text-black/80 flexCenter cursor-pointer transition-all hover:text-green-500">
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                )}
            </div>
            {/* <div className=" border border-cyan-100"></div> */}
        </>
    )
}

export default Navbar