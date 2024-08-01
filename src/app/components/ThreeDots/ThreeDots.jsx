import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { RxDotsHorizontal } from 'react-icons/rx'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
const ThreeDots = ({ deleteItem, renameItem }) => {
   const [isOptions, setIsOptions] = useState(false)

   return (
      <div className='bg-transparent  gap-2 pr-2 flex items-center justify-center relative'>
         <RxDotsHorizontal className='cursor-pointer' onClick={() => setIsOptions(!isOptions)} />
         {isOptions && (
            <div className='absolute top-5 right-4 rounded  z-50 flex flex-col gap-0 p-2' style={{ background: '#625C57' }}>
               <span
                  className='flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded'
                  onClick={() => {
                     deleteItem()
                     setIsOptions(false)
                  }}>
                  <MdDelete color='red' />
                  <p className='text-sm text-red-500'>Delete</p>
               </span>
               <span className='flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded'>
                  <MdOutlineDriveFileRenameOutline />

                  <p className='text-sm text-white'>Rename</p>
               </span>
            </div>
         )}
      </div>
   )
}

export default ThreeDots
