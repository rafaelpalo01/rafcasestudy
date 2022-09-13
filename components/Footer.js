import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



const Footer = () => {
  return (
    <footer>
    <div className='grid grid-cols-2 border-t-4 border-amber-400 text-gray-500 text-center'>
    <div className="bg-slate-800 text-slate-100 pt-10">
    <div>Join our Civil and Construction Engineering Training Courses</div>
    <div>Design and Built by Rafael Palo</div>
    </div>
    <div className="bg-slate-900 text-slate-100">
      <div className='font-bold text-xl pt-10 pb-4'>SERVICES</div>
      <div className='pb-1'>Public Programs</div>
      <div className='pb-1'>Training</div>
      <div className='pb-1'>Consulting</div>
      <div className='pb-10'>On-Site Training</div>
    </div>
    </div>
    <div className="bg-black text-slate-200 text-center">Copyright © 2022 All Rights Reserved.</div>
    </footer>
    )
}

export default Footer