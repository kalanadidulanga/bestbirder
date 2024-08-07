// import { Button2 } from '@/components/ui/button2';
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from '@/contexts/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '@/constants';

const Login = () => {

    const { login } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [isErrorPass, setIsErrorPass] = useState(false);

    const [dataSet, setDataSet] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async (email, password) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/login.php`, {
                email: email,
                password: password,
            });

            if (response.data.success) {
                toast.success(response.data.message || 'Login successful');

                login(response.data.user);
            } else {
                toast.error(response.data.message || 'Login failed');
                console.log(response.data.message);
                // handle error
            }
        } catch (error) {
            console.error('There was an error!', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className=' w-full h-auto overflow-hidden relative flex flex-col'>
                {/* <div className=' absolute w-full h-full z-0 flex justify-center items-center'>
                    <img src="/assets/vectors/line4.svg" alt="line4" className=' w-full absolute' />
                    <img src="/assets/vectors/line5.svg" alt="line4" className=' w-full absolute' />
                </div> */}
                <div className=' max-container padding-container py-10 z-50 w-full'>
                    <Link to={'/'} className='absolute flex gap-3 items-center'>
                        <div className='p-3 lg:p-4 text-color1 bg-color6 rounded-full overflow-hidden '>
                            <IoMdArrowRoundBack size={24} />
                        </div>
                        <span className=' text-base'>Home</span>
                    </Link>
                    <div className=' w-full flex flex-col my-16 items-center gap-10'>
                        <h1 className=' text-5xl lg:text-6xl font-bold text-center'>Welcome Back,</h1>

                        <div className=' bg-[#DDF2F2] rounded-2xl py-16 w-full max-w-3xl overflow-clip'>
                            <div className=' flex flex-col w-full justify-center items-center'>
                                <div className=" flex flex-col gap-2 overflow-hidden w-full md:w-2/3 p-5">
                                    <label htmlFor="email" className={` text-sm ${isErrorEmail && 'text-[#8B2411]'}`}>
                                        Email
                                    </label>
                                    <div className={` ${isErrorEmail ? 'bg-[#FFE7E7] border border-[#8B2411]' : 'bg-[#F4FEFF]'} rounded-xl px-3 py-3 shadow-lg`} >
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className=" w-full h-full bg-transparent focus:outline-none text-sm"
                                            placeholder="Enter Your Email Address"
                                            onChange={(e) => {setDataSet((prev)=>({...prev, email: e.target.value}))}}
                                            value={dataSet.email}
                                        />
                                    </div>
                                    <p className={` text-red-700 font-bold ${isErrorEmail ? 'inline-flex' : 'hidden'}`}>
                                        *Invalid Email, Enter Correct Email
                                    </p>
                                </div>

                                <div className=" flex flex-col gap-2 overflow-hidden w-full md:w-2/3 p-5">
                                    <label htmlFor="pass" className={` text-sm ${isErrorPass && 'text-[#8B2411]'}`}>
                                        Password
                                    </label>
                                    <div className={` ${isErrorPass ? 'bg-[#FFE7E7] border border-[#8B2411]' : 'bg-[#F4FEFF]'} rounded-xl px-3 py-3 shadow-lg`} >
                                        <input
                                            type="password"
                                            name="pass"
                                            id="pass"
                                            className={` w-full h-full bg-transparent focus:outline-none text-sm ${isErrorPass && 'placeholder-[#8B2411]'}`}
                                            placeholder="Enter Your Password"
                                            onChange={(e) => {setDataSet((prev)=>({...prev, password: e.target.value}))}}
                                            value={dataSet.password}
                                        />
                                    </div>
                                    <p className={` text-red-700 font-bold ${isErrorPass ? 'inline-flex' : 'hidden'}`}>
                                        *Invalid Password, Enter Correct Password
                                    </p>
                                </div>

                                <Button disabled={isLoading} onClick={() => handleLogin(dataSet.email, dataSet.password)} variant='default' size='auto' className='mt-5 py-3 w-full max-w-sm'>LOGIN</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login