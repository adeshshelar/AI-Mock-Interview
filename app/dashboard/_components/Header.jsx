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
    <div className='flex p-3 items-center justify-between shadow-lg mx-7 my-5'>
        <Image src={'/logo.png'} className='mx-8' width={220} height={120}/>

        <div className='mx-8'>
        <UserButton />
        </div>
        
    </div>
  )
}

export default Header