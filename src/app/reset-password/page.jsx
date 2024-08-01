"use client"
import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Field from '../components/inputFIeld/Field'
import Button from '../components/button/Button'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Link from 'next/link'

function page() {

    const router = useRouter();

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
                    Reset Password
                </h1>

                <div className='xl:flex xl:justify-center hidden'>
                    <img src={'/images/forget-password/success.png'} alt={'logo'} className='w-1/2' />
                </div>

                <form className='flex flex-col gap-8'>

                    <Field type='password' placeHolder='Password' name='password' isIcon={true} iconColor="var(--primary-color)" />

                    <Field type='password' placeHolder='Confirm Password' name='cPassword' isIcon={true} iconColor="var(--primary-color)" />

                    <Button name={'Reset Password'} bgcolor={'var(--btn-primary)'} color='var(--white-color)' />
                </form>

                <p className='text-center text-white'>
                    Don't have an account? Sign Up
                </p>

            </div>
        </AuthLayout >
    )
}

export default page
