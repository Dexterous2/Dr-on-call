import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Field from '../components/inputFIeld/Field'
import Button from '../components/button/Button'

function page() {

    const checkBoxStyle = {
        margin: 0,
        appearance: "none",
        display: "block",
        width: "26px",
        height: "26px",
        background: "transparent",
        border: "1px solid #d9d9d9",
        outline: "none",
        flex: "0 0 auto",
        padding: "0",
        borderRadius: "50%",
        position: "relative",
        cursor: "pointer"
    }

    return (
        <AuthLayout src={'/images/main/logo.jpg'} alt={'logo'} className='w-1/2'>
            <div className='bg-primary-color rounded-lg h-auto p-11 flex flex-col gap-8 justify-center'>

                <div className='flex justify-center lg:hidden'>
                    <img src={'/images/main/logo_white.png'} alt={'logo'} className='w-1/2' />
                </div>

                <h1 className='text-center text-white'>
                    Create New Account
                </h1>

                <form className='flex flex-col gap-8'>
                    <Field type='text' placeHolder='Name' name='name' isIcon={true} iconColor="var(--primary-color)" />

                    <Field type='email' placeHolder='Enter Email Address' name='email' isIcon={true} iconColor="var(--primary-color)" />

                    <Field type='number' placeHolder='Cell Number' name='number' isIcon={true} iconColor="var(--primary-color)" />

                    <Field type='password' placeHolder='Password' name='password' isIcon={true} iconColor="var(--primary-color)" />

                    <Field type='password' placeHolder='Confirm Password' name='cPassword' isIcon={true} iconColor="var(--primary-color)" />

                    <div className='flex  items-center gap-4'>

                        <Field type='checkbox' className={'border-hidden w-fit after:checked:absolute after:checked:content-[""] after:checked:top-1/2 after:checked:left-1/2 after:checked:bg-primary-color after:checked:text-white-color after:checked:h-3 after:checked:w-3 after:checked:rounded-full after:checked:-translate-x-1/2 after:checked:-translate-y-1/2'} placeHolder='Confirm Password' name='cPassword' isIcon={true} iconColor="var(--primary-color)" Styles={checkBoxStyle} />

                        <p className='text-white'>
                            I agree to the <b>Term And Conditions, Privacy Policy & Disclaimer</b>
                        </p>
                    </div>

                    <Button name={'Sign Up'} bgcolor={'var(--btn-primary)'} color='var(--white-color)' />
                </form>

                <p className='text-center text-white'>
                    Don't have an account? Sign Up
                </p>

            </div>
        </AuthLayout >
    )
}

export default page
