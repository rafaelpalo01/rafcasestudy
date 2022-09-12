import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



const Header = () => {
  return (
    <div>
      {/* Header */}
      <div>
        <div className="bg-black text-white ">
        <h1 className="leading-none text-xl font-bold uppercase px-64 pt-6">Rafael Hood Crew</h1>
        <h2 className="leading-3 border-b-4 border-amber-400 px-96 pb-6">PH Provider</h2>
      </div>
      </div>  
      {/* Nav Bar */}
      <div className="pt-2 pb-2 flex justify-evenly font-bold">
        <div className="flex">
        <svg className="w-6 h-6 f" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        <Link href="/"><div className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">Home</div></Link>
        </div>
        <div className="flex">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
        <h1 className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">Special Offers</h1>
        </div>
        <div className="flex">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
        <h1 className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">Support</h1>
        </div>
        <div className="flex">
        <svg className="w-6 h-6" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 110.92"><title>username</title><path d="M37.9,57C35.84,53.76,32,49.31,32,45.46a6.2,6.2,0,0,1,4.16-5.63c-.19-3.24-.32-6.54-.32-9.81,0-1.93,0-3.88.11-5.79a18.91,18.91,0,0,1,.65-3.59,20.64,20.64,0,0,1,9.21-11.7,27,27,0,0,1,5-2.39C54,5.4,52.42.07,55.89,0,64-.21,77.33,7.21,82.53,12.84a20.58,20.58,0,0,1,5.31,13.34l-.33,14.2a4.66,4.66,0,0,1,3.41,2.91c1.11,4.49-3.54,10.06-5.7,13.63-2,3.29-9.62,13.93-9.62,14a2.81,2.81,0,0,0,.68,1.65c11.83,16.26,46.6,6,46.6,38.34H0C0,78.56,34.78,88.84,46.6,72.58c.58-.85.85-1.32.84-1.69,0-.21-8.76-12.6-9.54-13.85Z"/></svg>
        <Link href="/enroll"className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">List of Enrollee </Link>
        </div>
        <div className="flex">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
        <h1 className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">FAQ </h1>
        </div>
        <div className="flex">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
        <h1 className="pl-1 cursor-pointer hover:text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-amber-400 transtition ease-out duration">Contact </h1>
        </div>
      </div>     
      </div>
  )
}
export default Header
