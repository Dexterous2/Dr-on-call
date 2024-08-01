'use client'

import DSidebarLayout from "../layouts/DSidebarLayout";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Button from "../components/button/Button";
import styles from '@/app/profile/profile.module.css';
import Field from "../components/inputFIeld/Field";
import { HiDotsVertical } from "react-icons/hi";
import { TbBrandOffice } from "react-icons/tb";
import { FaFileZipper } from "react-icons/fa6";

const Page = () => {

    const [gridCol, setGridCol] = useState({
        lg_grid_top: 'lg:col-span-3',
        lg_grid_center: 'lg:col-span-5',
        lg_grid_bottom: 'lg:col-span-8',
        style_: '',
        style_hide: 'block',
        style_block: 'hidden'
    });

    const [toggleGrid, setToggleGrid] = useState(false);

    useEffect(() => {

    }, [toggleGrid, gridCol])

    const toggleHandler = () => {
        if (toggleGrid === true) {
            setGridCol({
                lg_grid_top: 'lg:col-span-3',
                lg_grid_center: 'lg:col-span-5',
                lg_grid_bottom: 'lg:col-span-8',
                style_: 'animate-spin',
                style_hide: 'block',
                style_block: 'hidden'
            })
        }
        else if (toggleGrid === false) {
            setGridCol({
                lg_grid_top: 'lg:col-span-8',
                lg_grid_center: 'lg:col-span-4',
                lg_grid_bottom: 'lg:col-span-4',
                style_: 'animate-spin',
                style_hide: 'hidden',
                style_block: 'block'
            })
        }

        setToggleGrid(!toggleGrid);
    }

    console.log(gridCol.lg_grid_top);
    // ${toggleGrid === true ? 'lg:col-span-8' : 'lg:col-span-3' }
    return (
        <DSidebarLayout>
            <div className="border--2 border-red-800 w-full h--[30rem] grid grid-cols-1 lg:grid-cols-8 gap-4 mb-5">

                <div className={`row_1 ${styles.box_shadow_sec} border--2 border-green-800 rounded-xl h-fit bg-[#2F83E4]  ${gridCol.lg_grid_top}`}>

                    <div className={`profile_div ${styles.animate_left_to_right} border--2 border-white w-full h-full p-3 ${gridCol.style_hide}`}>

                        <div className={`border--2 border-green-800 w-full h-full relative flex flex-col justify-center items-center gap-1`}>

                            <div className="border--2 border-yellow-500 w-[5.7rem] absolute right-0 top-3 hidden xl:block">
                                <p className="bg-white text-[#2F83E4] py-[0.2rem] px-[1.5rem] rounded-xl text-center text-xs">100 %</p>
                                <p className="text-[#fff]  text-center text-xs mt-1 leading-[1.15rem]"> Profile Completion </p>
                            </div>

                            <img src="/images/main/prof_img.png" alt="img.png" />
                            <h2 className="text-white text-lg"> Farrukh Ahmed </h2>
                            <small className="text-white text-base mt-[-0.5rem]"> Diabetic Patient </small>
                            <p className="flex justify--center items-center text-white"> <IoMailSharp className="me-2" />  example@gmail.com </p>
                            <p className="flex justify--center items-center text-white"> <FaPhone className="me-2" />  92-123456789 </p>

                            <div className="w-[10rem]">
                                <Button onClick={toggleHandler} name='Edit Profile' className='text-[#2F83E4] p-1 py-1 mt-2' />
                            </div>
                        </div>

                    </div>

                    <div className={`profile_div_fields ${styles.animate_left_to_right} border--2 border-white w-full h-full p-3 ${gridCol.style_block}`}>

                        <div className={`${styles.mob_fields_wrap} border--2 border-teal-950 w-full min-h-fit flex justify-between items-center md:justify-between flex-wrap`}>
                            <div className="flex justify-between items-center">
                                <img src="/images/main/prof_img.png" alt="img.png" className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]" />
                                <div className="ms-4">
                                    <h3 className="text-white text-[1.1rem] md:text-[1.3rem] mb-0"> Farrukh Ahmed </h3>
                                    <small className="text-white text-[0.9rem] mt-[-6rem]"> Diabetic Patient </small>
                                </div>
                            </div>
                            <div className="w-[12rem] h-[2.3rem] mt-4 md:mt-0 md:h-[2.5rem]">
                                <Button onClick={toggleHandler} name='Save Changes' className='text-[#2F83E4] h-full leading-[0rem] text-[1rem] p--[0%] px--0' />
                            </div>
                        </div>

                        <div className="border--2 border-green-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
                            <div>
                                <label htmlFor="" className="text-white">First Name</label>
                                <Field placeHolder='First Name' />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white">Last Name</label>
                                <Field placeHolder='Last Name' />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white">Email</label>
                                <Field placeHolder='Email' />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white">Phone</label>
                                <Field placeHolder='Phone' />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white">Location</label>
                                <Field placeHolder='Location' />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white">Postal Code</label>
                                <Field placeHolder='Postal Code' />
                            </div>
                        </div>

                    </div>

                </div>

                <div className={`row_2 ${styles.animate_left_to_right} ${styles.box_shadow_sec} border--2 border-blue-800 rounded-xl h--[20rem] bg-white ${gridCol.lg_grid_center} p-4`}>

                    <h4 className="text-[1.5rem] text-center md:text-left md:text-[1.8rem] text-[#22508E]"> Personal Health Record </h4>

                    <div className="cards border--2 border-green-700 w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        <div>
                            <h5 className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.15rem] mt-2 md:mt-0 text-[#22508E] flex justify-start items-center"> Lab Results <FaFileZipper className="ms-6" /> </h5>
                            <ul className="border-2 border-blue-900 rounded-lg p-2">
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.15rem] mt-2 md:mt-0 text-[#22508E] flex justify-start items-center"> Scan Results <FaFileZipper className="ms-6" /> </h5>
                            <ul className="border-2 border-blue-900 rounded-lg p-2">
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.15rem] mt-2 md:mt-0 text-[#22508E] flex justify-start items-center"> Test Results <FaFileZipper className="ms-6" /> </h5>
                            <ul className="border-2 border-blue-900 rounded-lg p-2">
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                                <li className="flex justify-around items-center p-3">
                                    <div className="flex justify-between">
                                        <TbBrandOffice className="text-[#22508E] text-2xl" />
                                        <p className="text-base text-[#A1A1A1] ms-2"> Lorem </p>
                                    </div>
                                    <HiDotsVertical className="text-[#22508E] cursor-pointer text-xl" />
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className={`row_3 ${styles.animate_left_to_right} ${styles.box_shadow_sec} bg-white border--2 rounded-xl border-rose-600 h-[20rem] lg:col-span-4`}>

                </div>

                <div className={`row_4 ${styles.animate_left_to_right} ${styles.box_shadow_sec} bg-white border--2 rounded-xl border-teal-900 h-[20rem] lg:col-span-4`}>

                </div>

                <div className={`row_5 ${styles.animate_left_to_right} ${styles.box_shadow_sec} bg-white border--2 rounded-xl border-black h-[20rem] ${gridCol.lg_grid_bottom}`}>

                </div>

            </div>
        </DSidebarLayout>
    );
}

export default Page;