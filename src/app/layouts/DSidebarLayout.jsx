"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoChatbubble } from "react-icons/io5";
import { usePathname } from 'next/navigation'
import { TbLogout2 } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import MobSidebar from '../components/mobSidebar/MobSidebar';
import { FaUser } from "react-icons/fa";
import { BiSolidCopyAlt } from "react-icons/bi";
import { MdWavingHand } from "react-icons/md";

function DSidebarLayout({ children }) {


    const pathname = usePathname();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarRoutes = [
        {
            name: 'Communicate',
            path: '/dashboard/communicate',
            icon: IoChatbubble
        },
        {
            name: 'Profile',
            path: '/',
            icon: FaUser
        },
        {
            name: 'Billings & Payments',
            path: '/',
            icon: BiSolidCopyAlt
        }
    ]

    const iconStyles = {
        fontSize: '26px',
    }

    return (
        <div className='lg:flex h-screen lg:bg-[#ECF5FF] bg-white'>
            <div className='lg:flex hidden flex-col h-screen bg-primary-color lg:w-1/4 xl:w-1/6 w-1/6 rounded-tr-2xl rounded-br-2xl'>
                <div className='flex justify-center w-auto py-10 '>
                    <img src={'/images/main/logo_white.png'} alt={'logo'} className='w-auto h-auto' />
                </div>

                <hr />
                <div className='h-80 flex flex-col justify-center px-3'>
                    {
                        sidebarRoutes.map((item) => (
                            <React.Fragment key={item.name}>
                                <Link className={`flex md:gap-10 justify-start items-center text-white 
                                hover:bg-btn-primary 
                                ${item.path === pathname ?
                                        `bg-btn-primary` : ''
                                    }
                                
                                md:py-5 md:px-4 lg:px-3 2xl:px-4 md:my-2 my-5 rounded-lg`} href={item.path}>
                                    {React.createElement(item.icon, iconStyles)}

                                    <div className='lg:block hidden' >
                                        {item.name}
                                    </div>
                                </Link>
                            </React.Fragment>
                        ))
                    }
                </div>
                <hr />

                <div className='h-1/2 flex flex-col justify-end px-3'>
                    <Link className='flex md:gap-10 justify-start items-center text-white hover:bg-btn-primary md:py-5 md:px-4 lg:px-3 md:my-0 my-5 rounded-lg' href={'/'}>

                        <TbLogout2 style={{ fontSize: "26px" }} />

                        <div className='lg:block hidden'>
                            Logout
                        </div>
                    </Link>
                </div>

            </div>


            <div className='lg:hidden flex flex-col justify-between flex-wrap bg-primary-color h-16'>
                <div className='w-full flex justify-between items-center p-2'>
                    <img src={'/images/main/logo_white.png'} alt={'logo'} className='w-auto h-auto' />
                    <FaBars onClick={() => setSidebarOpen(true)} className='text-2xl text-white' />
                </div>
                {/* {
                    sidebarOpen === true ?  */}
                <MobSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
                {/* } */}
            </div>

            <div className=' flex-col lg:px-10 px-3 py-2 xl:py-3 lg:w-[100%] lg:h-screen overflow-hidden overflow-y-auto'>

                <div className='lg:block hidden xl:pb-5 pb-1 '>
                    <div className='flex gap-4 pt-5'>
                        <MdWavingHand className='text-2xl text-yellow-500' />
                        <h3>
                            Good Morning,
                        </h3>
                    </div>
                    <div className='py-4'>
                        <h2>
                            JOHN STURGIS
                        </h2>
                    </div>
                </div>

                {children}

            </div>
        </div >
    )
}

export default DSidebarLayout
