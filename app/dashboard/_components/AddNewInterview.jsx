"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAIModal';
import { LoaderCircle } from 'lucide-react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';


function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false);
  const[jobPosition, setJobPosition] = useState();
  const[jobDesc, setJobDesc] = useState();
  const[jobExperince, setJobExperince] = useState();
  const[loading, setLoading] = useState(false);
  const[jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const {user} = useUser();


  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperince);

    const InputPrompt = "Job position: " + jobPosition + ", job description: " + jobDesc + " , Years of experience: " + jobExperince + ", Depends on this information please give me " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview questions with answers in JSON format. Give question and answer as fields in JSON";

    const result = await chatSession.sendMessage(InputPrompt);

    const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');

    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db.insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperince,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-yyyy')
        }).returning({ mockId: MockInterview.mockId });

      console.log("Inserted id:", resp);
      if (resp) {
        setOpenDailog(false);
        router.push('/dashboard/interview/' + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }

    setLoading(false);
  }

  return (
    <div>
      <div
      >
       <Button onClick={() => setOpenDailog(true)} size="lg"  className="button  w-full sm:w-fit text-lg rounded-full">
         Generate Interview
        </Button>
      </div>
      <Dialog open={openDailog} onOpenChange={setOpenDailog}>
        <DialogContent className='max-w-2xl bg-white dark:bg-gray-800 shadow-lg '>
          <DialogHeader>
            <DialogTitle className='text-2xl font-extrabold '>Tell us more about your job interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>Add details about your job position/role, Job description, and years of experience.</h2>

                  <div className='mt-7 my-3'>
                    <label className='font-extrabold'>Job Role/Job Position</label>
                    <Input
                      placeholder='Ex. Full Stack Developer'
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>

                  <div className='my-3'>
                    <label  className='font-extrabold'>Job Description/Tech Stack (In Short)</label>
                    <Textarea
                      placeholder='Ex. React, Express, MySql, NodeJS etc.'
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>

                  <div className='my-3'>
                    <label  className='font-extrabold'>Years of Experience</label>
                    <Input
                      placeholder='Ex.5'
                      type="number"
                      max="50"
                      required
                      onChange={(event) => setJobExperince(event.target.value)}
                    />
                  </div>
                </div>

                <div className='flex gap-5 justify-end'>
                  <Button type='button' variant="ghost" onClick={() => setOpenDailog(false)}>
                    Cancel
                  </Button>
                  <Button className="rounded-full" type='submit' disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className='animate-spin' /> Generating from AI
                      </>
                    ) : (
                      'Start Interview'
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
