"use client"
import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function Dashboard() {
  return (

<section className="py-5 md:py-10">
  <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
    {/* Left Side Text */}
    <div className="flex flex-col justify-center gap-8">
      <h1 className="h1-bold text-lg md:text-xl 2xl:text-3xl">
        Your Interview Coach, Level Up with AI Mock Interviews
      </h1>
      <p className="p-regular-20 md:p-regular-24 pb-2 text-sm md:text-base 2xl:text-lg">
        AI-Enhanced Mock Interviews for Better Preparation, Get AI-Based Feedback and Excel in Your Interviews
      </p>

      <AddNewInterview />
    </div>

    {/* Right Side Image */}
    <Image
      src="/front.jpeg"
      width={1500}
      height={1000}
      className="max-h-[70vh] object-contain object-center md:max-h-[60vh] 2xl:max-h-[50vh] 2xl:w-auto"
    />
  </div>
</section>

      // <InterviewList />
    
  
  );
}

export default Dashboard;
