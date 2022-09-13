import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



const Footer = () => {
  return (
    <footer>
    <div className='grid grid-cols-2 border-t-4 border-amber-400 text-gray-500 text-center'>
    <div className="bg-slate-800 text-slate-400 pt-10">
    <div className='font-bold text-4xl'>Join our Civil and Construction Engineering Training Courses</div>
    <div>Design and Built by Rafael Palo</div>
    </div>
    <div className="bg-slate-900 text-slate-400">
      <div className='font-bold text-2xl pt-10 pb-4 underline underline-offset-8 '>SERVICES</div>
      <div className='pb-1 underline'>Public Programs</div>
      <div className='pb-1 underline'>Training</div>
      <div className='pb-1 underline'>Consulting</div>
      <div className='pb-10 underline'>On-Site Training</div>
    </div>
    </div>
    <div className="bg-black text-slate-400 text-center">Copyright © 2022 All Rights Reserved.</div>
    </footer>
    )
}

export default Footer