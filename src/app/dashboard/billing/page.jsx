"use client"
import Button from '@/app/components/button/Button';
import DSidebarLayout from '@/app/layouts/DSidebarLayout'
import SwiperBreakPoint from '@/app/utils/SwiperBreakPoint';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

function page() {

    const packages = [
        {
            pkgName: 'Silver',
            pkgPrice: 12,
            benefits: [
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
            ]
        },
        {
            pkgName: 'Gold',
            pkgPrice: 12,
            benefits: [
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
            ]
        },
        {
            pkgName: 'Platinum',
            pkgPrice: 12,
            benefits: [
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
                {
                    text: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
                },
            ]
        }
    ]

    return (
        <DSidebarLayout>
            <div className=' lg:flex lg:flex-col lg:justify-center bg-white rounded-2xl'>

                <div className='text-center text-primary-color flex flex-col sm:m-4 m-0 gap-4'>
                    <h1>
                        Choose Your Plan
                    </h1>

                    <div className=''>
                        <Swiper
                            spaceBetween={20}
                            breakpoints={SwiperBreakPoint}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                packages.map((item, i) => (
                                    <SwiperSlide key={i + 2} >
                                        <div key={i + 2} className={`flex-1 flex flex-col justify-between border-2 xl:p-10 p-3 ${item.pkgName === 'Platinum' ? 'bg-primary-color' : 'border-primary-color'}  rounded-xl`}>
                                            <div className='flex flex-col items-center xl:gap-6 gap-2 justify-center'>
                                                <h2 className={`${item.pkgName === 'Platinum' ? "text-white" : ""}`}>
                                                    {item.pkgName}
                                                </h2>

                                                <div className='w-fit'>
                                                    <h2 className={` ${item.pkgName === 'Platinum' ? "bg-white text-primary-color" : "bg-primary-color text-white"}  rounded-full p-5`}>
                                                        {item.pkgPrice}$ /month
                                                    </h2>
                                                </div>


                                                <div className='flex flex-col items-start xl:gap-6 gap-4  xl:h-[17rem] lg:h-[13rem] h-[14rem] overflow-y-auto overflow-x-hidden xl:py-5 pt-0  w-full'>
                                                    {item.benefits.map((benefit, i) => (
                                                        <div key={i + 1} className='flex items-center gap-3'>
                                                            <FaCheckCircle className={item.pkgName === 'Platinum' ? 'text-white text-2xl' : 'text-2xl'} />
                                                            <p className={`w-[100%] text-start ${item.pkgName === 'Platinum' ? 'text-white' : ''}`}>{benefit.text}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className='w-fit'>
                                                    <Button name={'Get Started'} bgcolor={item.pkgName === 'Platinum' ? 'white' : 'var(--primary-color)'} className={item.pkgName === 'Platinum' ? 'text-bg-primary' : 'text-white'} />
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

        </DSidebarLayout>
    )
}

export default page
