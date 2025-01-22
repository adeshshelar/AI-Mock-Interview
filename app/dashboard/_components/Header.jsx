"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image';

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    },[]);

  return (
    <div className='flex items-center justify-between shadow-xl mx-2 sm:mx-9 mt-6 border-t-8 border-purple-600 p-3'>
        <Image src={'/logo.png'} className='mx-2 sm:mx-8' width={150} height={100}/>

        <div>
        <UserButton />
        </div>
       
    </div>
  )
}

export default Header
