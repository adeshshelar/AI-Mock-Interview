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
    <div className='flex p-3 items-center justify-between shadow-xl mx-9 mt-6 border-t-8 border-purple-600'>
        <Image src={'/logo.png'} className='mx-8' width={200} height={140}/>

        <div className='mx-8'>
        <UserButton />
        </div>
       
    </div>
  )
}

export default Header