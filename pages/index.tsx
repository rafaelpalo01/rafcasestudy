import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <div className="relative md:w-auto md:h-96 w-auto h-48">
      <Image src={"/1.jpg"} layout="fill" alt="stew"></Image>
      </div>
      <div className="bg-gray-200 border-b border text-gray-400 pl-2 pb-2 pt-2 text-sm md:text-lg">Construction and Civil Engineering Training Courses</div>

      <div className="md:grid md:grid-cols-2">
      <div>
        <div className="md:text-left md:pt-20 md:ml-48 text-center">
        <div className="font-bold text-4xl text-gray-700">WELCOME TO</div>
        <div className="font-bold text-2xl pb-6 underline underline-offset-8 decoration-gray-300 text-gray-700">RAFAEL HOOD CREW</div>
        <div className="md:pb-20 text-slate-400">
        <div>Training is important to the achievements of a business.</div>
        <div>maybe its most positive profit is best workers. a</div>
        <div>corporation develop the potential of associate worker,</div>
        <div>and a part of the approach a corporation encourages</div>
        <div>improvement is thru coaching. Often, smart coaching is</div>
        <div>simply as vital as a decent edges package for associate</div>
        <div>worker.</div></div>
        </div>
      </div>
      <div className="sticky md:w-96 md:h-80 md:ml-28 md:mt-4 md:scale-150 h-80 w-auto">
      <Image src={"/city.png"} layout="fill" alt="stew"></Image>
      </div>
      </div>

      <div className="relative">
      <div className="relative md:w-auto md:h-96 w-auto h-80">
      <Image src={"/sunset.jpg"} layout="fill" alt="stew"></Image>
      </div>
      <div className="absolute top-20 md:ml-80 text-center">
      <div className="text-white md:text-center pb-2">Register Now ! Training Programs In Philippines</div>
      <div className="text-white text-left font-bold text-4xl border-t-4 text-center">MAKE YOUR SUCCESS A PRIORITY.</div></div>
      </div>
      <div className="bg-yellow-700 text-white">
      <div className="flex md:ml-20 md:pt-28 ml-10 pt-10">
      <svg className="md:w-16 md:h-16 h-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
        <div className="md:ml-2 font-bold md:text-4xl pb-10 text-xl">UPCOMING TRAINING COURSES</div>
      </div>
      <div className="md:grid md:grid-cols-2 md:pb-28 pb-10">
      <div className="md:ml-28 ml-10">
        <div className="uppercase font-bold md:text-xl pb-4 text-md">Advanced Concrete Technology</div>
        <div className="pb-1 text-slate-200">This training course will be held</div>
        <div className="pb-1 text-slate-200">on 12 - October - 2022.</div>
        <div className="flex">
        <div className="text-sm text-slate-200 cursor-pointer">READ MORE</div>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></div>
      </div>
      <div className="md:ml-28 ml-10">
        <div className="uppercase font-bold md:text-xl text-md">Advanced Materials For Construction</div>
        <div className="uppercase font-bold md:text-xl pb-4 text-md">and Repair Of Concrete</div>
        <div className="pb-1 text-slate-200">This training course will be held</div>
        <div className="pb-1 text-slate-200">on 3 - November - 2022.</div>
        <div className="flex">
        <div className="text-sm text-slate-200 cursor-pointer">READ MORE</div>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></div></div>
      </div>
      </div>
      
      {/* Courses */} 
      <div className="md:grid md:grid-cols-4 pb-8 gap-2 pl-6 pr-6">
      <div className="pt-8">
      <div className="bg-white rounded-xl overflow-hidden lg:h-auto h-80 shadow-md relative hover:shadow-xl">
      <div className="relative w-auto h-48">
        <Image src={"/2.jpg"} layout="fill" alt="stew"></Image></div>
        <div className="text-md">
        <Link href="/ce101">
        <div className="hover:text-gray-500 cursor-pointer">
        <div className="ml-2 font-bold font-serif">Course Title: Supervising Heavy</div>
        <div className="block ml-2 font-bold font-serif">Equipment Operation During Construction</div></div></Link>
        <div className="block ml-2 text-sm text-gray-600">Code: CE101</div>
        <Link href="/ce101"><div className="cursor-pointer bg-amber-600 hover:bg-amber-800 text-sm rounded-sm text-center p-1 font-bold text-gray-200">Enroll Now</div></Link>
        </div>
        <div className="flex bg-stone-100 text-xs uppercase rounded-full font-bold p-1.5 absolute top-0 ml-2 mt-2">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 506.49"><path fillRule="nonzero" d="M294.24 17.11C294.24 7.69 303.52 0 315.1 0c11.57 0 20.87 7.65 20.87 17.11v74.85c0 9.42-9.3 17.11-20.87 17.11-11.58 0-20.86-7.65-20.86-17.11V17.11zm58.81 301.55h17.92c3.27 0 5.96 2.69 5.96 5.96v56.84h48.21c3.3 0 5.99 2.7 5.99 5.98v17.92c0 3.31-2.69 5.98-5.99 5.98h-78.09v-86.72c0-3.27 2.7-5.96 6-5.96zm24.77-80.55c36.98 0 70.56 15.04 94.83 39.35C496.96 301.7 512 335.25 512 372.31c0 37.02-15.02 70.61-39.3 94.88l-.68.64c-24.23 23.88-57.5 38.66-94.2 38.66-37.06 0-70.61-15.04-94.88-39.31l-.64-.69c-23.9-24.24-38.68-57.53-38.68-94.18 0-37.06 15.04-70.61 39.32-94.88 24.27-24.28 57.85-39.32 94.88-39.32zm78.74 55.41c-20.09-20.11-47.96-32.58-78.74-32.58-30.75 0-58.61 12.47-78.75 32.62-20.15 20.14-32.62 48-32.62 78.75 0 30.5 12.25 58.14 32.02 78.19l.6.55c20.14 20.14 48 32.62 78.75 32.62 30.48 0 58.12-12.26 78.21-32.03l.54-.58c20.15-20.15 32.61-48 32.61-78.75s-12.48-58.61-32.62-78.79zM56.8 242.28c-1.17 0-2.23-5.2-2.23-11.56 0-6.39.92-11.54 2.23-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.92 11.56-2.24 11.56H56.8zm90.77 0c-1.17 0-2.23-5.2-2.23-11.56 0-6.39.92-11.54 2.23-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.92 11.56-2.24 11.56h-56.94zm90.77 0c-1.16 0-2.22-5.2-2.22-11.56 0-6.39.92-11.54 2.22-11.54h56.94c1.19 0 2.25 5.15 2.25 11.49-5.7 3.55-11.2 7.44-16.43 11.61h-42.76zm-181.4 66.24c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.22 5.2 2.22 11.58 0 6.37-.91 11.57-2.22 11.57H56.94zm90.77 0c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.23 5.2 2.23 11.58 0 6.37-.92 11.57-2.23 11.57h-56.94zM57.06 374.8c-1.18 0-2.24-5.2-2.24-11.58 0-6.37.94-11.57 2.24-11.57H114c1.19 0 2.24 5.2 2.24 11.57 0 6.38-.93 11.58-2.24 11.58H57.06zm90.78 0c-1.19 0-2.25-5.2-2.25-11.58 0-6.37.94-11.57 2.25-11.57h56.94c1.18 0 2.24 5.2 2.24 11.57 0 6.38-.94 11.58-2.24 11.58h-56.94zM106.83 17.11C106.83 7.69 116.1 0 127.69 0c11.57 0 20.86 7.65 20.86 17.11v74.85c0 9.42-9.34 17.11-20.86 17.11-11.59 0-20.86-7.65-20.86-17.11V17.11zM22.97 163.64h397.39V77.46c0-2.94-1.19-5.53-3.09-7.43-1.9-1.9-4.59-3.08-7.42-3.08h-38.1c-6.39 0-11.59-5.2-11.59-11.57 0-6.38 5.2-11.58 11.59-11.58h38.1c9.32 0 17.7 3.77 23.82 9.89 6.12 6.13 9.88 14.49 9.88 23.82v136.81c-7.61-2.62-15.41-4.73-23.44-6.29v-21.38h.25H22.97v223.17c0 2.94 1.18 5.52 3.08 7.42 1.91 1.9 4.61 3.09 7.44 3.09h188.85c2.16 8.01 4.86 15.83 8.11 23.35H33.71c-9.3 0-17.7-3.75-23.84-9.89C3.75 427.72 0 419.36 0 410.02V77.55c0-9.29 3.75-17.7 9.87-23.82 6.14-6.13 14.5-9.88 23.84-9.88h40.67c6.38 0 11.57 5.2 11.57 11.56C85.95 61.8 80.76 67 74.38 67H33.71c-2.96 0-5.54 1.18-7.44 3.08-1.9 1.9-3.09 4.59-3.09 7.43v86.16h-.21v-.03zm158.95-96.69c-6.39 0-11.57-5.2-11.57-11.57 0-6.38 5.18-11.58 11.57-11.58h77.55c6.39 0 11.57 5.2 11.57 11.58 0 6.37-5.18 11.57-11.57 11.57h-77.55z"/></svg>
          <h1 className="ml-1">Duration: 2Days</h1>
        </div>
      </div>
      </div>

      <div className="pt-8">
      <div className="bg-white rounded-xl overflow-hidden lg:h-auto h-80 shadow-md relative hover:shadow-xl">
      <div className="relative w-auto h-48">
        <Image src={"/3.jpg"} layout="fill" alt="stew"></Image></div>
        <div className="text-md">
        <Link href="/ce102">
        <div className="hover:text-gray-500 cursor-pointer">
        <div className="ml-2 font-bold font-serif">Course Title: Supervising </div>
        <div className="block ml-2 font-bold font-serif">Electrical Installation in Building Construction</div></div></Link>
        <div className="block ml-2 text-sm text-gray-600">Code: CE102</div>
        <Link href="/ce102"><div className="cursor-pointer bg-amber-600 hover:bg-amber-800 text-sm rounded-sm text-center p-1 font-bold text-gray-200">Enroll Now</div></Link>
        </div>
        <div className="flex bg-stone-100 text-xs uppercase rounded-full font-bold p-1.5 absolute top-0 ml-2 mt-2">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 506.49"><path fillRule="nonzero" d="M294.24 17.11C294.24 7.69 303.52 0 315.1 0c11.57 0 20.87 7.65 20.87 17.11v74.85c0 9.42-9.3 17.11-20.87 17.11-11.58 0-20.86-7.65-20.86-17.11V17.11zm58.81 301.55h17.92c3.27 0 5.96 2.69 5.96 5.96v56.84h48.21c3.3 0 5.99 2.7 5.99 5.98v17.92c0 3.31-2.69 5.98-5.99 5.98h-78.09v-86.72c0-3.27 2.7-5.96 6-5.96zm24.77-80.55c36.98 0 70.56 15.04 94.83 39.35C496.96 301.7 512 335.25 512 372.31c0 37.02-15.02 70.61-39.3 94.88l-.68.64c-24.23 23.88-57.5 38.66-94.2 38.66-37.06 0-70.61-15.04-94.88-39.31l-.64-.69c-23.9-24.24-38.68-57.53-38.68-94.18 0-37.06 15.04-70.61 39.32-94.88 24.27-24.28 57.85-39.32 94.88-39.32zm78.74 55.41c-20.09-20.11-47.96-32.58-78.74-32.58-30.75 0-58.61 12.47-78.75 32.62-20.15 20.14-32.62 48-32.62 78.75 0 30.5 12.25 58.14 32.02 78.19l.6.55c20.14 20.14 48 32.62 78.75 32.62 30.48 0 58.12-12.26 78.21-32.03l.54-.58c20.15-20.15 32.61-48 32.61-78.75s-12.48-58.61-32.62-78.79zM56.8 242.28c-1.17 0-2.23-5.2-2.23-11.56 0-6.39.92-11.54 2.23-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.92 11.56-2.24 11.56H56.8zm90.77 0c-1.17 0-2.23-5.2-2.23-11.56 0-6.39.92-11.54 2.23-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.92 11.56-2.24 11.56h-56.94zm90.77 0c-1.16 0-2.22-5.2-2.22-11.56 0-6.39.92-11.54 2.22-11.54h56.94c1.19 0 2.25 5.15 2.25 11.49-5.7 3.55-11.2 7.44-16.43 11.61h-42.76zm-181.4 66.24c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.22 5.2 2.22 11.58 0 6.37-.91 11.57-2.22 11.57H56.94zm90.77 0c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.23 5.2 2.23 11.58 0 6.37-.92 11.57-2.23 11.57h-56.94zM57.06 374.8c-1.18 0-2.24-5.2-2.24-11.58 0-6.37.94-11.57 2.24-11.57H114c1.19 0 2.24 5.2 2.24 11.57 0 6.38-.93 11.58-2.24 11.58H57.06zm90.78 0c-1.19 0-2.25-5.2-2.25-11.58 0-6.37.94-11.57 2.25-11.57h56.94c1.18 0 2.24 5.2 2.24 11.57 0 6.38-.94 11.58-2.24 11.58h-56.94zM106.83 17.11C106.83 7.69 116.1 0 127.69 0c11.57 0 20.86 7.65 20.86 17.11v74.85c0 9.42-9.34 17.11-20.86 17.11-11.59 0-20.86-7.65-20.86-17.11V17.11zM22.97 163.64h397.39V77.46c0-2.94-1.19-5.53-3.09-7.43-1.9-1.9-4.59-3.08-7.42-3.08h-38.1c-6.39 0-11.59-5.2-11.59-11.57 0-6.38 5.2-11.58 11.59-11.58h38.1c9.32 0 17.7 3.77 23.82 9.89 6.12 6.13 9.88 14.49 9.88 23.82v136.81c-7.61-2.62-15.41-4.73-23.44-6.29v-21.38h.25H22.97v223.17c0 2.94 1.18 5.52 3.08 7.42 1.91 1.9 4.61 3.09 7.44 3.09h188.85c2.16 8.01 4.86 15.83 8.11 23.35H33.71c-9.3 0-17.7-3.75-23.84-9.89C3.75 427.72 0 419.36 0 410.02V77.55c0-9.29 3.75-17.7 9.87-23.82 6.14-6.13 14.5-9.88 23.84-9.88h40.67c6.38 0 11.57 5.2 11.57 11.56C85.95 61.8 80.76 67 74.38 67H33.71c-2.96 0-5.54 1.18-7.44 3.08-1.9 1.9-3.09 4.59-3.09 7.43v86.16h-.21v-.03zm158.95-96.69c-6.39 0-11.57-5.2-11.57-11.57 0-6.38 5.18-11.58 11.57-11.58h77.55c6.39 0 11.57 5.2 11.57 11.58 0 6.37-5.18 11.57-11.57 11.57h-77.55z"/></svg>
          <h1 className="ml-1">Duration: 2Days</h1>
        </div>
      </div>
      </div>

      <div className="pt-8">
      <div className="bg-white rounded-xl overflow-hidden lg:h-auto h-80 shadow-md relative hover:shadow-xl">   
      <div className="relative w-auto h-48">
        <Image src={"/4.jpg"} layout="fill" alt="stew"></Image></div>
        <div className="text-md">
        <Link href="/ce103">
        <div className="hover:text-gray-500 cursor-pointer">
        <div className="ml-2 font-bold font-serif">Course Title: Methods and</div>
        <div className="block ml-2 font-bold font-serif">Techniques in Welding Works and Inspection for Supervisors</div></div></Link>
        <div className="block ml-2 text-sm text-gray-600">Code: CE103</div>
        <Link href="/ce103"><div className="cursor-pointer bg-amber-600 hover:bg-amber-800 text-sm rounded-sm text-center p-1 font-bold text-gray-200">Enroll Now</div></Link>
        </div>
        <div className="flex bg-stone-100 text-xs uppercase rounded-full font-bold p-1.5 absolute top-0 ml-2 mt-2">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 506.49"><path fillRule="nonzero" d="M294.24 17.11C294.24 7.69 303.52 0 315.1 0c11.57 0 20.87 7.65 20.87 17.11v74.85c0 9.42-9.3 17.11-20.87 17.11-11.58 0-20.86-7.65-20.86-17.11V17.11zm58.81 301.55h17.92c3.27 0 5.96 2.69 5.96 5.96v56.84h48.21c3.3 0 5.99 2.7 5.99 5.98v17.92c0 3.31-2.69 5.98-5.99 5.98h-78.09v-86.72c0-3.27 2.7-5.96 6-5.96zm24.77-80.55c36.98 0 70.56 15.04 94.83 39.35C496.96 301.7 512 335.25 512 372.31c0 37.02-15.02 70.61-39.3 94.88l-.68.64c-24.23 23.88-57.5 38.66-94.2 38.66-37.06 0-70.61-15.04-94.88-39.31l-.64-.69c-23.9-24.24-38.68-57.53-38.68-94.18 0-37.06 15.04-70.61 39.32-94.88 24.27-24.28 57.85-39.32 94.88-39.32zm78.74 55.41c-20.09-20.11-47.96-32.58-78.74-32.58-30.75 0-58.61 12.47-78.75 32.62-20.15 20.14-32.62 48-32.62 78.75 0 30.5 12.25 58.14 32.02 78.19l.6.55c20.14 20.14 48 32.62 78.75 32.62 30.48 0 58.12-12.26 78.21-32.03l.54-.58c20.15-20.15 32.61-48 32.61-78.75s-12.48-58.61-32.62-78.79zM56.8 242.28c-1.17 0-2.23-5.2-2.23-11.56 0-6.39.92-11.54 2.23-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.92 11.56-2.24 11.56H56.8zm90.77 0c-1.17 0-2.23-5.2-2.23-11.56 0-6.39.92-11.54 2.23-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.92 11.56-2.24 11.56h-56.94zm90.77 0c-1.16 0-2.22-5.2-2.22-11.56 0-6.39.92-11.54 2.22-11.54h56.94c1.19 0 2.25 5.15 2.25 11.49-5.7 3.55-11.2 7.44-16.43 11.61h-42.76zm-181.4 66.24c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.22 5.2 2.22 11.58 0 6.37-.91 11.57-2.22 11.57H56.94zm90.77 0c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.23 5.2 2.23 11.58 0 6.37-.92 11.57-2.23 11.57h-56.94zM57.06 374.8c-1.18 0-2.24-5.2-2.24-11.58 0-6.37.94-11.57 2.24-11.57H114c1.19 0 2.24 5.2 2.24 11.57 0 6.38-.93 11.58-2.24 11.58H57.06zm90.78 0c-1.19 0-2.25-5.2-2.25-11.58 0-6.37.94-11.57 2.25-11.57h56.94c1.18 0 2.24 5.2 2.24 11.57 0 6.38-.94 11.58-2.24 11.58h-56.94zM106.83 17.11C106.83 7.69 116.1 0 127.69 0c11.57 0 20.86 7.65 20.86 17.11v74.85c0 9.42-9.34 17.11-20.86 17.11-11.59 0-20.86-7.65-20.86-17.11V17.11zM22.97 163.64h397.39V77.46c0-2.94-1.19-5.53-3.09-7.43-1.9-1.9-4.59-3.08-7.42-3.08h-38.1c-6.39 0-11.59-5.2-11.59-11.57 0-6.38 5.2-11.58 11.59-11.58h38.1c9.32 0 17.7 3.77 23.82 9.89 6.12 6.13 9.88 14.49 9.88 23.82v136.81c-7.61-2.62-15.41-4.73-23.44-6.29v-21.38h.25H22.97v223.17c0 2.94 1.18 5.52 3.08 7.42 1.91 1.9 4.61 3.09 7.44 3.09h188.85c2.16 8.01 4.86 15.83 8.11 23.35H33.71c-9.3 0-17.7-3.75-23.84-9.89C3.75 427.72 0 419.36 0 410.02V77.55c0-9.29 3.75-17.7 9.87-23.82 6.14-6.13 14.5-9.88 23.84-9.88h40.67c6.38 0 11.57 5.2 11.57 11.56C85.95 61.8 80.76 67 74.38 67H33.71c-2.96 0-5.54 1.18-7.44 3.08-1.9 1.9-3.09 4.59-3.09 7.43v86.16h-.21v-.03zm158.95-96.69c-6.39 0-11.57-5.2-11.57-11.57 0-6.38 5.18-11.58 11.57-11.58h77.55c6.39 0 11.57 5.2 11.57 11.58 0 6.37-5.18 11.57-11.57 11.57h-77.55z"/></svg>
          <h1 className="ml-1">Duration: 3Days</h1>
        </div>
      </div>
      </div>

      <div className="pt-8">
      <div className="bg-white rounded-xl overflow-hidden lg:h-auto h-80 shadow-md relative hover:shadow-xl">
      <div className="relative w-auto h-48">
        <Image src={"/5.jpg"} layout="fill" alt="stew"></Image></div>
        <div className="text-md">
        <Link href="/ce104">
        <div className="hover:text-gray-500 cursor-pointer">
        <div className="ml-2 font-bold font-serif">Course Title: Heavy Equipment Maintenance</div></div></Link>
        <div className="block ml-2 text-sm text-gray-600">Code: CE104</div>
        <Link href="/ce104"><div className="mt-6 cursor-pointer bg-amber-600 hover:bg-amber-800 text-sm rounded-sm text-center p-1 font-bold text-gray-200">Enroll Now</div></Link>
        </div>
        <div className="flex bg-stone-100 text-xs uppercase rounded-full font-bold p-1.5 absolute top-0 ml-2 mt-2">
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 506.49"><path fillRule="nonzero" d="M294.24 17.11C294.24 7.69 303.52 0 315.1 0c11.57 0 20.87 7.65 20.87 17.11v74.85c0 9.42-9.3 17.11-20.87 17.11-11.58 0-20.86-7.65-20.86-17.11V17.11zm58.81 301.55h17.92c3.27 0 5.96 2.69 5.96 5.96v56.84h48.21c3.3 0 5.99 2.7 5.99 5.98v17.92c0 3.31-2.69 5.98-5.99 5.98h-78.09v-86.72c0-3.27 2.7-5.96 6-5.96zm24.77-80.55c36.98 0 70.56 15.04 94.83 39.35C496.96 301.7 512 335.25 512 372.31c0 37.02-15.02 70.61-39.3 94.88l-.68.64c-24.23 23.88-57.5 38.66-94.2 38.66-37.06 0-70.61-15.04-94.88-39.31l-.64-.69c-23.9-24.24-38.68-57.53-38.68-94.18 0-37.06 15.04-70.61 39.32-94.88 24.27-24.28 57.85-39.32 94.88-39.32zm78.74 55.41c-20.09-20.11-47.96-32.58-78.74-32.58-30.75 0-58.61 12.47-78.75 32.62-20.15 20.14-32.62 48-32.62 78.75 0 30.5 12.25 58.14 32.02 78.19l.6.55c20.14 20.14 48 32.62 78.75 32.62 30.48 0 58.12-12.26 78.21-32.03l.54-.58c20.15-20.15 32.61-48 32.61-78.75s-12.48-58.61-32.62-78.79zM56.8 242.28c-1.17 0-2.23-5.2-2.23-11.56 0-6.39.92-11.54 2.23-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.92 11.56-2.24 11.56H56.8zm90.77 0c-1.17 0-2.23-5.2-2.23-11.56 0-6.39.92-11.54 2.23-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.92 11.56-2.24 11.56h-56.94zm90.77 0c-1.16 0-2.22-5.2-2.22-11.56 0-6.39.92-11.54 2.22-11.54h56.94c1.19 0 2.25 5.15 2.25 11.49-5.7 3.55-11.2 7.44-16.43 11.61h-42.76zm-181.4 66.24c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.22 5.2 2.22 11.58 0 6.37-.91 11.57-2.22 11.57H56.94zm90.77 0c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.23 5.2 2.23 11.58 0 6.37-.92 11.57-2.23 11.57h-56.94zM57.06 374.8c-1.18 0-2.24-5.2-2.24-11.58 0-6.37.94-11.57 2.24-11.57H114c1.19 0 2.24 5.2 2.24 11.57 0 6.38-.93 11.58-2.24 11.58H57.06zm90.78 0c-1.19 0-2.25-5.2-2.25-11.58 0-6.37.94-11.57 2.25-11.57h56.94c1.18 0 2.24 5.2 2.24 11.57 0 6.38-.94 11.58-2.24 11.58h-56.94zM106.83 17.11C106.83 7.69 116.1 0 127.69 0c11.57 0 20.86 7.65 20.86 17.11v74.85c0 9.42-9.34 17.11-20.86 17.11-11.59 0-20.86-7.65-20.86-17.11V17.11zM22.97 163.64h397.39V77.46c0-2.94-1.19-5.53-3.09-7.43-1.9-1.9-4.59-3.08-7.42-3.08h-38.1c-6.39 0-11.59-5.2-11.59-11.57 0-6.38 5.2-11.58 11.59-11.58h38.1c9.32 0 17.7 3.77 23.82 9.89 6.12 6.13 9.88 14.49 9.88 23.82v136.81c-7.61-2.62-15.41-4.73-23.44-6.29v-21.38h.25H22.97v223.17c0 2.94 1.18 5.52 3.08 7.42 1.91 1.9 4.61 3.09 7.44 3.09h188.85c2.16 8.01 4.86 15.83 8.11 23.35H33.71c-9.3 0-17.7-3.75-23.84-9.89C3.75 427.72 0 419.36 0 410.02V77.55c0-9.29 3.75-17.7 9.87-23.82 6.14-6.13 14.5-9.88 23.84-9.88h40.67c6.38 0 11.57 5.2 11.57 11.56C85.95 61.8 80.76 67 74.38 67H33.71c-2.96 0-5.54 1.18-7.44 3.08-1.9 1.9-3.09 4.59-3.09 7.43v86.16h-.21v-.03zm158.95-96.69c-6.39 0-11.57-5.2-11.57-11.57 0-6.38 5.18-11.58 11.57-11.58h77.55c6.39 0 11.57 5.2 11.57 11.58 0 6.37-5.18 11.57-11.57 11.57h-77.55z"/></svg>
          <h1 className="ml-1">Duration: 1Day</h1>
        </div>
      </div>
      </div>
      </div> 
    </div>
  )
}

export default Home
