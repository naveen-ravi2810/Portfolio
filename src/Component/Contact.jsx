import React from 'react'

function Contact({contactref}) {
  return (
    <div ref={contactref} className='md:py-48 pt-36'>
      <h1 id="titl" className='font-extrabold text-3xl pl-20 underline pb-20 uppercase'>Contact</h1>\
        <div className='flex justify-center'>
          {/* <div className='hidden md:block'>
            Always Get in touch with Social media apps Sticked in left of the page
          </div> */}
          <div className='p-[2%] h-1/2 border-2 border-orange-400 rounded-2xl shadow-2xl shadow-white '>
            <h3 className='flex justify-center font-bold'>Queries and Collaboration can be Placed</h3>
            <div className=''>
                <div>
                  <label>Name:</label>
                  <br />
                  <input className='rounded-md border-2 pl-2 py-1 outline-none w-72' type="text"/>
                </div>
                <div>
                  <label>Email:</label>
                  <br />
                  <input className='rounded-md border-2 pl-2 py-1 outline-none w-72' type="email"/>
                </div>
                <div>
                  <label>Phone:</label>
                  <br />
                  <input className='rounded-md border-2 pl-2 py-1 outline-none w-72' type="tel" />
                </div>
                <label>Message:</label>
                <br />
                <textarea className='rounded-md border-2 pl-2 py-1 outline-none w-72' name="" id="" cols="30" rows="10"></textarea>              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact