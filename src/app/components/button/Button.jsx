'use client'
import React from 'react'
import Loader from '../loader/Loader'
import dynamic from 'next/dynamic'

const Button = ({ name, bgcolor, className, disabled, onClick, isLoading, icon, color }) => {
   let btnClass

   if (disabled) {
      btnClass = ` cursor-not-allowed text-gray-400 p-3 px-10 rounded-lg bg-gray-600 ${className}`
   } else {
      btnClass = `p-3 px-10 rounded-lg ${className}`
   }

   return (
      <button
         className={`${btnClass} w-full active:scale-95 transition-all`}
         style={{
            backgroundColor: bgcolor ? bgcolor : disabled ? 'rgb(147 143 143)' : 'var(--white-color)',
            color: disabled ? 'var(--white-color)' : color,

         }}
         onClick={() => {
            if (disabled === true || isLoading) {
               return
            } else if (onClick) {
               return onClick()
            } else {
               return
            }
         }}
         disabled={disabled}>
         {isLoading ? (
            <div className='flex items-center justify-center gap-2'>
               <Loader /> Loading...
            </div>
         ) : icon ? (
            <div className='flex items-center gap-2'>
               {icon} {name}
            </div>
         ) : (
            name
         )}
      </button>
   )
}

export default dynamic(() => Promise.resolve(Button), { ssr: false })
