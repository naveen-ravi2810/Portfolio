import React from 'react';
import profile from './../Assests/IMG_20230608_152519-removebg-preview.png';
import { TypeAnimation } from 'react-type-animation';

function Home({homeref}) {
  return (
    <div ref={homeref} className='md:py-48 md:pt-36 pt-16 flex justify-between items-center md:px-[20%] px-6'>
      <div id="moto" className='md:w-[45%]'>
          <h3 className='text-2xl'>Hi, I am </h3>
          <h1 className='font-bold text-4xl '>
          <TypeAnimation
      sequence={[
        'Software Developer 🧑‍💻.',
        1000,
        'College Student 👨‍🎓.',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <div className=''>
            <p className='text-xl md:text-justify text-gray-800'>I specialize in building web apps/sites with excellent user interfaces and secure APIs. Collaboration and problem-solving are my strengths, as I enjoy working in teams to solve new challenges and upgrade solutions for existing solutions. With a focus on user experience and data security, I strive to deliver </p><p className='font-semibold text-black text-xl md:text-justify'>high-quality, intuitive, and secure applications.</p>
          </div>
      </div>
      <div id="picture" className='w-[40%] md:block hidden'>
          <img className='w-full' src={profile} alt="" />
      </div>
    </div>
  )
}

export default Home