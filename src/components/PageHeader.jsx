import React from 'react'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const PageHeader = ({ name,image, className }) => {
    return (
        <>
            <section className=' bg-primary2/20 bg-cover bg-center '>
                <div className=' bg-black/30 relative w-full h-auto flex flex-col overflow-hidden'>
                    <img src={image} alt="" className={` ${className} absolute z-0 w-full h-full object-cover`} />
                    <div className=' w-full h-full bg-black/30 z-20'>
                        <div className=' max-container padding-contaoner py-14 md:py-16 lg:py-20 overflow-hidden z-20'>
                            <div className=' flex flex-col items-center justify-center gap-4'>
                                <h2 className=' text-white text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide'>{name}</h2>
                                <div className=' flex items-center gap-3'>
                                    <div className=' bg-primary rounded-full p-2 flex justify-center items-center'><FaHome color='white' size={15} /></div>
                                    <Link to={'/'} className=' text-white text-lg md:text-xl lg:text-2xl cursor-pointer hover:underline'>Home</Link>
                                    <IoIosArrowForward color='white' size={25} />
                                    <p className=' text-white text-lg md:text-xl lg:text-2xl text-center'>{name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageHeader