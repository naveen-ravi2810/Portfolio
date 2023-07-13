import React from 'react'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai';

function Navbar({scroll_content, home, about, project, skills, contact, ActiveSection}) {

  const [ShowNavbar, setShowNavbar] = useState(false);

  return (
    <div className='sticky top-0'>
      <div className='flex md:justify-between gap-4 items-center md:px-10 bg-gradient-to-r from-white to-amber-900'>
        <div className='md:hidden pl-5'>
          <FiMenu size={20} onClick={()=>setShowNavbar(true)} /> 
        </div>
        <div id="name" className='font-logo-font font-bold text-5xl'>
          Naveen R
        </div>
        <div className='hidden md:block text-xl'>
          <ul className="flex gap-5">
            <li onClick={()=>scroll_content(home)} className={`${ActiveSection === home ? 'underline decoration-white' : null } hover:cursor-pointer`}>Home</li>
            <li onClick={()=>scroll_content(about)} className={`${ActiveSection === about ? 'underline decoration-white' : null } hover:cursor-pointer`}>About</li>
            <li onClick={()=>scroll_content(project)} className={`${ActiveSection === project ? 'underline decoration-white' : null } hover:cursor-pointer`}>Project</li>
            <li onClick={()=>scroll_content(skills)} className={`${ActiveSection === skills ? 'underline decoration-white' : null } hover:cursor-pointer`}>Skills</li>
            <li onClick={()=>scroll_content(contact)} className={`${ActiveSection === contact ? 'underline decoration-white' : null } hover:cursor-pointer`}>Contact</li>
          </ul>
        </div>
      </div>
      <div className={`${ShowNavbar ? 'block': 'hidden'} fixed top-0 pt-[2%] px-[2%] left-0 h-screen w-[60%] bg-black rounded-r-2xl`}>
        <div id="name" className='flex justify-between items-center font-logo-font font-bold text-5xl text-white'>
          Naveen R
          <AiOutlineClose size={28} onClick={()=>setShowNavbar(false)}/>
        </div>
        <ul className='text-white uppercase h-1/2 underline'>
          <li onClick={()=>[scroll_content(home),setShowNavbar(false)]} className='hover:cursor-pointer sm:border-b border-gray-600'>Home</li>
          <li onClick={()=>[scroll_content(about),setShowNavbar(false)]} className='hover:cursor-pointer sm:border-b border-gray-600'>About</li>
          <li onClick={()=>[scroll_content(project),setShowNavbar(false)]} className='hover:cursor-pointer sm:border-b border-gray-600'>Project</li>
          <li onClick={()=>[scroll_content(skills),setShowNavbar(false)]} className='hover:cursor-pointer sm:border-b border-gray-600'>Skills</li>
          <li onClick={()=>[scroll_content(contact),setShowNavbar(false)]} className='hover:cursor-pointer sm:border-b border-gray-600'>Contact</li>  
        </ul>
      </div>
    </div>
  )
}

export default Navbar