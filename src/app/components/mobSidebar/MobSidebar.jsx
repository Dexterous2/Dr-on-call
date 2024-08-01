import React from 'react'
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { IoChatbubble } from "react-icons/io5";
import Link from 'next/link';
import { FaUser } from "react-icons/fa";
import { BiSolidCopyAlt } from "react-icons/bi";
import { usePathname } from 'next/navigation';


function MobSidebar({ setSidebarOpen, sidebarOpen }) {

    const pathname = usePathname();
    // console.log(sidebarOpen)
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
        <div className={`h-screen md:w-1/3 bg-primary-color absolute z-50 flex flex-col justify-between
         ${sidebarOpen === true ? `translate-x-[0vw] transition-all ease-out duration-500` : `translate-x-[-100vw] transition-all ease-in duration-500`}`}>


            <div>
                <div className='w-full flex justify-between items-center py-4 px-4'>
                    <img src={'/images/main/logo_white.png'} alt={'logo'} className='w-auto h-auto' />

                    <RxCrossCircled onClick={() => setSidebarOpen(false)} className='text-2xl text-white' />
                </div>

                <hr />
                <div className='h-80 flex flex-col justify-center px-3'>
                    {
                        sidebarRoutes.map((item) => (
                            <React.Fragment key={item.name}>
                                <Link className={`flex gap-10 justify-start items-center text-white 
                            
                            ${item.path === pathname ? `bg-btn-primary` : ''}
                            
                            py-5 px-4 md:my-0 my-1 rounded-lg`} href={item.path}>
                                    {React.createElement(item.icon, iconStyles)}

                                    <div>
                                        {item.name}
                                    </div>
                                </Link>
                            </React.Fragment>
                        ))
                    }
                </div>
                <hr />
            </div>


            <div className='lg:h-1/2 flex flex-col justify-end pb-8 px-3'>
                <Link className='flex gap-10 justify-start items-center text-white hover:bg-btn-primary md:py-5 py-5 px-3 md:px-4 lg:px-0  rounded-lg' href={'/'}>

                    <TbLogout2 style={{ fontSize: "26px" }} />

                    <div className=''>
                        Logout
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default MobSidebar
