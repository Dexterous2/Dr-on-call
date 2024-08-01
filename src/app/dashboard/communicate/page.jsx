"use client"
import React, { useEffect, useState } from 'react'
import DSidebarLayout from '../../layouts/DSidebarLayout'
import Button from '@/app/components/button/Button'
import Field from '@/app/components/inputFIeld/Field'
import { IoIosSend } from "react-icons/io";
import ModalComponent from '@/app/components/Modal/ModalComponent';
import { MdEmail } from "react-icons/md";
import ImageUploader from '@/app/components/imageUploder/ImageUploader';
import { FaFileAlt } from "react-icons/fa";
import { ImFilePicture } from "react-icons/im";

function page() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    // const [icon, setIcon] = useState(<FaFileAlt className='text-[#22508E] text-[6rem]' />)

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const btnObj = [
        {
            heading: "I Have A Medical Question",
            option: [
                {
                    text: "BASE-Q"
                },
                {
                    text: "HIST"
                },
                {
                    text: "QUST"
                },
                {
                    text: "COT"
                },
                {
                    text: "ENS"
                },
                {
                    text: "SC"
                }
            ]
        },
        {
            heading: "Understand My Test And Results",
            option: [
                {
                    text: "BASE-L"
                },
                {
                    text: "LAB"
                },
                {
                    text: "ENS"
                },
                {
                    text: "HIST"
                },
                {
                    text: "SC"
                }
            ]
        },
        {
            heading: "Understand My Symptoms",
            option: [
                {
                    text: "BASE-PROMPT"
                },
                {
                    text: "USER HEALTH HISTORY"
                },
                {
                    text: "COT"
                },
                {
                    text: "ENSEMBLE"
                },
                {
                    text: "READABILITY"
                },
                {
                    text: "SC"
                },
            ]
        },
        {
            heading: "Understand Something On My Skin",
            option: []
        }
    ]

    const [quesType, setQuesType] = useState(btnObj?.[0]);
    const [quesTabs, setQuesTabs] = useState('');


    const handleSelectChange = (e) => {
        const selectedIndex = e.target.value;
        const selectedBtn = btnObj[selectedIndex];

        setQuesType(selectedBtn);

        if (selectedBtn.heading === 'Understand My Test And Results') {
            setModalIsOpen(true);
            setModalContent(
                <div className='border--2 border-green-800 md:w-[21rem] flex justify-center items-center flex-col gap-3'>
                    <h2 className='text-white text-base lg:text-lg mt-[3rem]'> Attach Your Documnet </h2>
                    <p className='text-center text-white text-[0.5rem]'>
                        Upload your lab results as PDFs, and receive them conveniently via email and on your dashboard as soon as they're available.
                    </p>
                    <div className='h-[2.5rem] bg-[#F0F0F0] flex items-center p-1 rounded-lg overflow-hidden'>
                        <MdEmail className='text-[#57A5D8] text-xl' />
                        <Field placeHolder={'Email'} className={``} />
                    </div>
                    <div className='bg-[#F0F0F0] flex items-center rounded-lg overflow-hidden'>
                        <ImageUploader icon={<FaFileAlt className='text-[#22508E] text-[6rem]' />} />
                    </div>
                    <div className='w-full flex justify-center'>
                        <select id="country" name="country" autoComplete="country-name" className="block py-2 px-7  rounded-md border-0 text-[#22508E] shadow-sm outline-none sm:max-w-xs sm:text-sm sm:leading-6">
                            <option className='text-xs sm:text-sm'>BASE-L</option>
                            <option className='text-xs sm:text-sm'>LAB</option>
                            <option className='text-xs sm:text-sm'>ENS</option>
                            <option className='text-xs sm:text-sm'>READ</option>
                            <option className='text-xs sm:text-sm'>HIST</option>
                            <option className='text-xs sm:text-sm'>SC</option>
                        </select>
                    </div>
                    <Button name={'Send Now'} bgcolor='#22508E' className={`text-white mb-3 md:mb-0`} />
                </div>
            );
        }
        else if (selectedBtn.heading === 'Understand Something On My Skin') {
            setModalIsOpen(true);
            setModalContent(
                <div className='border--2 border-green-800 md:w-[21rem] flex justify-center items-center flex-col gap-3'>
                    <h2 className='text-white text-base lg:text-lg mt-[3rem]'> Attach Your Picture </h2>
                    <p className='text-center text-white text-[0.5rem]'>
                        Capture a photo of your skin concern, and let our AI provide insights on potential issues. Get informed about what it could be with just a snapshot!
                    </p>
                    <div className='h-[2.5rem] bg-[#F0F0F0] flex items-center p-1 rounded-lg overflow-hidden'>
                        <MdEmail className='text-[#57A5D8] text-xl' />
                        <Field placeHolder={'Email'} className={``} />
                    </div>
                    <div className='bg-[#F0F0F0] flex items-center rounded-lg overflow-hidden'>
                        <ImageUploader icon={<ImFilePicture className='text-[#22508E] text-[6rem]' />} />
                    </div>
                    <Button name={'Send Now'} bgcolor='#22508E' className={`text-white mb-3 md:mb-0`} />
                </div>
            );
        }
        else {
            setModalIsOpen(false);
        }
    };

    const _id = 'user';

    const chats = [
        {
            _id: "ai",
            img: '/images/chatting/ai.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },

        {
            _id: "user",
            img: '/images/chatting/user.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            _id: "ai",
            img: '/images/chatting/ai.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            _id: "user",
            img: '/images/chatting/user.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            _id: "ai",
            img: '/images/chatting/ai.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            _id: "user",
            img: '/images/chatting/user.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            _id: "ai",
            img: '/images/chatting/ai.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            _id: "user",
            img: '/images/chatting/user.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            _id: "ai",
            img: '/images/chatting/ai.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            _id: "user",
            img: '/images/chatting/user.png',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ]

    console.log(quesTabs, "quesTabs")
    console.log(quesType, "quesType")

    return (
        <DSidebarLayout>

            <ModalComponent
                isOpen={modalIsOpen}
                closeModal={closeModal}
                content={modalContent}
            />

            <div className=' bg-[#ECF5FF]'>
                <div className='bg-white-color rounded-lg lg:px-14 px-6 sm:pt-8 pt-1 pb-6'>

                    <div className='sm:flex'>

                        <div className='flex w-[100%] lg:flex-col lg:justify-center justify-center items-center  sm:items-start my-4 lg:my-0'>
                            <select onChange={(e) => setQuesTabs(e.target.value)} className='btn bg-primary-color border-2 rounded-lg px-4 py-4 text-white w-fit' >
                                {
                                    quesType.option.map((item, i) => (
                                        <option key={i + 1} value={item.text} >
                                            {item?.text}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='flex w-[100%] lg:flex-col lg:justify-center justify-center items-center  sm:items-end my-4 lg:my-0'>
                            <select onChange={handleSelectChange} className='btn bg-primary-color border-2 rounded-lg px-4 py-4 text-white w-fit' >
                                {
                                    btnObj.map((item, i) => (
                                        <option key={i + 1} value={i} >
                                            {item.heading}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className='my-3 xl:h-[50vh] lg:h-[45vh] md:h-[70vh] max-[375px]:h-[55vh] h-[60vh] overflow-y-auto overflow-x-hidden lg:px-5 px-0 lg:py-10 py-0 chat-height'>
                        {
                            chats.map((item, i) => (
                                <div key={i + 1} >
                                    {
                                        item._id !== _id ?
                                            <div className={`flex gap-5 items-center lg:my-4 my-3`}>
                                                <img src={item.img} className='lg:block hidden border-2 rounded-full border-primary-color' />

                                                <p className={`bg-gray-200 p-4 rounded-tr-2xl rounded-br-2xl rounded-tl-2xl `}>
                                                    {item.text}
                                                </p>

                                            </div> :
                                            <div className={`flex gap-5 items-center justify-end `}>

                                                <p className={`bg-primary-color text-white p-4 rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl`}>
                                                    {item.text}
                                                </p>

                                                <img src={item.img} className='lg:block hidden border-2 rounded-full border-primary-color' />

                                            </div>
                                    }



                                </div>
                            ))
                        }
                    </div>

                    <div className='sm:static absolute pe-4 flex my-4 gap-4 items-center'>

                        <div className='relative w-full'>
                            <Field className={'p-5'} placeHolder='Type Something...' />

                            <div className='absolute top-[50%] mr-2 -translate-y-[50%] right-0 p-2 bg-white-color rounded-full'>
                                <IoIosSend className='text-2xl text-primary-color' />
                            </div>

                        </div>

                        <label htmlFor='input-file' role='button'>
                            <img src='/images/chatting/add-file.png' />
                        </label>
                        <input className='hidden' type='file' id='input-file' />

                    </div>

                </div>
            </div>

        </DSidebarLayout>
    )
}

export default page