import React from 'react';
import { LuSchool } from 'react-icons/lu';
import { LiaUniversitySolid } from 'react-icons/lia';

function About({aboutref}) {
  return (
    <div ref={aboutref} className='pt-20'>
      <div id="titl" className='font-extrabold text-3xl pl-20 underline pb-20 uppercase'>Education</div>
      <div id='Education Details' className='px-24' >
          <div className='md:block flex'>
          <div className='md:hidden block'>
            <div className='pb-44 border-r-2 border-dotted border-black'></div> <div><span> </span></div>
            <div className='pb-44 border-r-2 border-dotted border-black'></div> <div><span> </span></div>
            <div className='pb-72 border-r-2 border-dotted border-black'></div>
          </div>
          <div className='md:flex justify-center'>
              <div id="10th" className='md:border-2 border-red-700 rounded-lg w-64 p-4 hover:text-white hover:bg-blue-200'>
                <h2 className='text-xl font-bold'>Jaivins Academy</h2>
                <h3 className='text-lg'>Attur</h3>
                <h4 className='font-sm'>SSLC</h4>
                <h5 className='font-sm'>2017-2019</h5>
                <p className='font-sm'>Scored 76%</p>
                <p className='font-sm'>Maths 95%</p>
              </div>
              <div className='hidden md:flex items-center'>----------<LuSchool size={32}/>----------</div>
              <div id="12th" className='md:border-2 border-red-700 rounded-lg w-64 p-4 hover:text-white hover:bg-blue-200'>
                <h2 className='text-xl font-bold'>Jaivins Academy</h2>
                <h3 className='text-lg'>Attur</h3>
                <h4 className='font-sm'>HSC </h4>
                <h5 className='font-sm'>2019-2021</h5>
                <p className='font-sm'>Maths&ComputerScience</p> 
                <p className='font-sm'>Scored 89%</p>
                <p className='font-sm'>Computer 90%</p>
              </div>
              <div className='hidden md:flex items-center'>-----------<LiaUniversitySolid size={32}/>--------------</div>
              <div id="college" className='md:border-2 border-red-700 rounded-lg w-64 p-4 hover:text-white hover:bg-blue-200'>
                <h2 className='text-xl font-bold'>Sri Eshwar College of Engineering</h2>
                <h3 className='text-lg'>Coimbatore</h3>
                <h4 className='font-sm'>B.E</h4>
                <h5 className='font-sm'>2021 - present</h5>
                <h6 className='font-sm'>Electronics and Communication Engineering</h6>
                <p className='font-sm'>CGPA 7.9</p>
              </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default About