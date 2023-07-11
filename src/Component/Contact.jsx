import React from 'react'

function Contact({contactref}) {
  return (
    <div ref={contactref} className='pt-20'>
      <h1 id="titl" className='font-extrabold text-3xl pl-20 underline pb-10 uppercase'>Contact</h1>
        <div className='flex justify-center text-xl pb-20'>
          For any quaries <a href={`mailto:naveen.cravi@gmail.com`} className='text-blue-600 px-2'> click here </a>and mail me
        </div>
    </div>
  )
}

export default Contact