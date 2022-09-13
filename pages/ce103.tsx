import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



const electricalSupervise: NextPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 border-b-2 border-gray-300 pb-6 pt-36">
      <div className="ml-20">
        <div className="font-bold text-2xl">Methods and Techniques in Welding Works and Inspection for Supervisors</div>
        <div>Training by Raf</div>
        </div>
        <div className="relative w-48 h-36 ml-80">
        <Image src={"/4.jpg"} layout="fill" alt="stew"></Image>
      </div>
      </div>
      <div className="grid grid-cols-2 pt-16">
        <div className="ml-20">
        <div className="font-bold text-xl">Details</div>
        <div className="font-bold mt-4 mb-8">Methods and Techniques in Welding Works and Inspection for Supervisors</div>
        <div className="mb-4">The course is designed for three days, 30% lecture and 70% practicum to give the trainee the basic knowledge and skills in shielded metal arc welding (SMAW).</div>
        <div className="font-bold mt-6 mb-2 text-xl">Outline</div>
        <div className="font-bold mb-6">Course Highlights</div>
        <div className="mb-4">At the end of the training, the participants will be able to:</div>
        <div>1. Explain the principles and operation of shielded metal arc welding</div>
        <div>2. Set up the equipment correctly</div>
        <div>3. Select the correct electrode for a particular job</div>
        <div>4. Make a single V butt joint in flat, horizontal and vertical position</div>
        </div>
        <div className="ml-80 relative">
        <Link href="/new"><div className="hover:shadow-lg text-3xl cursor-pointer hover:bg-blue-800 bg-blue-600 absolute rounded-none text-center font-bold text-gray-200 p-2">Enroll Now</div></Link>
        <div className="flex">
        <svg className="mt-20 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"></path></svg>
        <div className="mt-20 ml-2">On-Site</div></div>
        <div className="flex border-b-4 border-gray-200 pb-6">
        <svg className="w-6 h-6 mt-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
        <div className="ml-2 mt-4 ">Training Course</div></div>
        <div className="flex mt-10">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
        <div className="ml-2 font-bold">SHARE THIS TRAINING</div></div>
        </div>
      </div>
    </div>
  )
}

export default electricalSupervise