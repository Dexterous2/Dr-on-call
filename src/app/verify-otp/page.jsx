"use client"
import React, { useRef, useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Field from '../components/inputFIeld/Field'
import Button from '../components/button/Button'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import style from "./otp.module.css"

function page() {

    const router = useRouter();
    const inputRefs = useRef([]);

    const [otp, setOtp] = useState("");

    const handleOtpChange = (event, index) => {
        const { value } = event.target;

        if (isNaN(value) || value.length > 1) {
            return;
        }

        const otpArray = [...otp];
        otpArray[index] = value;
        const newOtp = otpArray.join("").slice(0, 4);
        setOtp(newOtp);

        if (value !== "") {
            const nextIndex = index + 1;
            if (inputRefs.current[nextIndex]) {
                inputRefs.current[nextIndex].focus();
            }
        }
    };

    return (
        <AuthLayout src={'/images/main/logo.jpg'} alt={'logo'} className='w-1/2'>
            <div className='bg-primary-color rounded-lg h-auto p-11 flex flex-col gap-8 justify-center'>

                <Link href='/login' className='flex items-center gap-3' role='button'>
                    <IoIosArrowRoundBack className='text-white text-3xl ' />
                    <p className='text-white'>
                        Back To Login
                    </p>
                </Link>

                <div className='flex justify-center lg:hidden'>
                    <img src={'/images/main/logo_white.png'} alt={'logo'} className='w-1/2' />
                </div>

                <h1 className='text-center text-white'>
                    VERIFY OTP
                </h1>

                <div className='lg:flex hidden justify-center'>
                    <img src={'/images/forget-password/vector.png'} alt={'logo'} className='w-1/2' />
                </div>

                <form className='flex flex-col gap-8'>

                    <div className={`text-center gap-2 flex w-full justify-between ${style.otp_Fields}`}>
                        {[...Array(4)].map((_, index) => (
                            <input
                                className="md:w-16 md:h-14 w-8 h-8 rounded-lg text-black text-center outline-none"
                                ref={(ref) => (inputRefs.current[index] = ref)}
                                key={index + 1}
                                type="number"
                                value={otp[index] || ""}
                                onChange={(event) => handleOtpChange(event, index)}
                                maxLength={4}
                            />
                        ))}
                    </div>

                    <Button name={'Verify OTP'} bgcolor={'var(--btn-primary)'} color='var(--white-color)' />

                </form>

                <p className='text-center text-white'>
                    Don't have an account? Sign Up
                </p>

            </div>
        </AuthLayout >
    )
}

export default page
