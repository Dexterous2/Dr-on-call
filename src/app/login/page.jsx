"use client"
import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Field from '../components/inputFIeld/Field'
import Button from '../components/button/Button'

function page() {

    const googleAuth = () => {
        window.open(
            `http://localhost:5000/auth/google/callback`,
            "_self"
        );
    };

    return (
        <AuthLayout src={'/images/main/logo.jpg'} alt={'logo'} className='w-1/2'>
            <div className='bg-primary-color rounded-lg h-auto p-11 flex flex-col gap-8 justify-center'>

                <div className='flex justify-center lg:hidden'>
                    <img src={'/images/main/logo_white.png'} alt={'logo'} className='w-1/2' />
                </div>

                <h1 className='text-center text-white'>
                    Sign into your Account
                </h1>

                <form className='flex flex-col gap-8'>
                    <Field type='email' placeHolder='Enter Email Address' name='email' isIcon={true} iconColor="var(--primary-color)" />

                    <Field type='password' placeHolder='Password' name='password' isIcon={true} iconColor="var(--primary-color)" />

                    <Button name={'Login'} bgcolor={'var(--btn-primary)'} color='var(--white-color)' />

                </form>
                <Button name={'Login With Google'} bgcolor={'var(--btn-primary)'} color='var(--white-color)' onClick={googleAuth} />

                <p className='text-center text-white'>
                    Don't have an account? Sign Up
                </p>

            </div>
        </AuthLayout >
    )
}

export default page
