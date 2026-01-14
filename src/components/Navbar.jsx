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
            {/* Top Contact Bar */}
            <div className="bg-primary2 border-b border-primary2/20">
                <div className="flex flex-col items-center gap-1 py-2 md:py-2.5 md:flex-row md:justify-between max-container padding-container">
                    <a href="tel:+94772723796" className="text-xs md:text-sm text-white hover:text-white/90 transition-colors flex items-center gap-2">
                        <FaWhatsapp className="text-base" />
                        <span>+94772723796 / +94716362389</span>
                    </a>
                    <a href="mailto:bestbirdersl@gmail.com" className="text-xs md:text-sm text-white hover:text-white/90 transition-colors flex items-center gap-2">
                        <HiOutlineMail className="text-base" />
                        <span>bestbirdersl@gmail.com / info@bestbirdersl.com</span>
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <nav className="flexBetween max-container padding-container relative py-2 md:py-3.5">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/bestbirder-logo.svg" width={110} height={80} alt="logo" className="h-12 md:h-14 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex h-full gap-6 xl:gap-8 items-center">
                        {NAV_LINKS.map((link) => (
                            <NavLink 
                                to={link.href} 
                                key={link.key} 
                                className={({ isActive }) => 
                                    `text-sm xl:text-base uppercase tracking-wide font-semibold transition-all duration-300 hover:text-primary2 relative group ${
                                        isActive ? 'text-primary2' : 'text-slate-700'
                                    }`
                                }
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary2 group-hover:w-full transition-all duration-300"></span>
                            </NavLink>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        className="inline-flex items-center justify-center lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors" 
                        onClick={toggleNavbar}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <IoClose size={28} className="text-slate-700" />
                        ) : (
                            <img src="/menu.svg" alt="menu" width={28} height={28} />
                        )}
                    </button>
                </nav>

                {/* Mobile Navigation Dropdown */}
                {isOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
                        <div className="max-container padding-container py-4 space-y-1">
                            {NAV_LINKS.map((link) => (
                                <NavLink 
                                    to={link.href} 
                                    key={link.key} 
                                    onClick={toggleNavbar}
                                    className={({ isActive }) => 
                                        `block px-4 py-3 text-sm uppercase tracking-wide font-semibold rounded-lg transition-all duration-200 ${
                                            isActive 
                                                ? 'bg-primary2/10 text-primary2' 
                                                : 'text-slate-700 hover:bg-gray-50 hover:text-primary2'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar