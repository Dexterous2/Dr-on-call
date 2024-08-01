import Image from 'next/image'
import React from 'react'

function AuthLayout({ children, src, alt, className }) {
    return (
        <div className='flex h-screen items-center justify-around sm:px-0 px-4' >
            <div className={`lg:flex hidden ${className}`}>
                <img src={src} alt={alt} className='h-auto w-auto' />
            </div>
            {children}
        </div>
    )
}

export default AuthLayout
