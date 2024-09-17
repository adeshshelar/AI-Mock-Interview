"use client"

import { UserButton } from '@clerk/nextjs'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import InterviewList from './InterviewList.jsx';

function Header() {

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    },[]);

  return (
    <div className='flex p-3 items-center justify-between shadow-md'>
        <h2 className='font-extrabold py-2 ml-6 text-2xl'>QuickMock</h2>

        <UserButton/>
    </div>
  )
}

export default Header