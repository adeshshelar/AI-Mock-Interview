"use client"
import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function Dashboard() {
  return (

   <section className="py-5 md:py-10">
  <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 items-center 2xl:gap-10 4xl:gap-20">
    {/* Text Section */}
    <div className="flex flex-col justify-center gap-8 text-center md:text-left 2xl:gap-12 4xl:gap-16">
      <h1 className="h1-bold text-xl md:text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-6xl">
        Your Interview Coach, Level Up with AI Mock Interviews
      </h1>
      <p className="p-regular-20 md:p-regular-24 pb-2 text-gray-600 2xl:text-xl 4xl:text-2xl">
        AI-Enhanced Mock Interviews for Better Preparation, Get AI-Based Feedback and Excel in Your Interviews
      </p>
      <div className="flex justify-center md:justify-start">
        <AddNewInterview />
      </div>
    </div>

    {/* Image Section */}
    <div className="flex justify-center">
      <Image
        src="/front.jpeg"
        width={1500}
        height={1000}
        className="max-h-[50vh] md:max-h-[60vh] 2xl:max-h-[70vh] 4xl:max-h-[80vh] object-contain"
        alt="AI Mock Interviews"
      />
    </div>
  </div>
</section>

      // <InterviewList />
    
  
  );
}

export default Dashboard;
