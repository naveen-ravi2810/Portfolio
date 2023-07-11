import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

function Links() {
  return (
    <div>
        {/* For sm */}
        <div className='md:hidden flex justify-center mb-10'>
            <ul className='flex justify-between gap-10'>
                <li><a href="http://github.com/naveen-ravi2810" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a></li>
                <li><a href="http://www.linkedin.com/in/naveen-ravi-chandran-258234220" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a></li>
                <li><a href="http://www.instagram.com/_naveen_.tn_15/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a></li>
                <li><AiOutlineTwitter/></li>
            </ul>
        </div>
        {/* For md */}
        <div  className='hidden md:block fixed left-0 top-96 w-10 bg-[#3FE4FB]/[0.58]'>
            <div className='flex justify-center'>
            <ul className=''>
                <li className='py-2'><a href="http://github.com/naveen-ravi2810" target="_blank" rel="noopener noreferrer"><AiFillGithub className="hover:text-white text-black hover:text-2xl" /></a></li>
                <li className='py-2'><a href="http://www.linkedin.com/in/naveen-ravi-chandran-258234220/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="hover:text-white text-black hover:text-2xl" /></a></li>
                <li className='py-2'><a href="http://www.instagram.com/_naveen_.tn_15/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="hover:text-white text-black hover:text-2xl" /></a></li>
                <li className='py-2'><AiOutlineTwitter className="hover:text-white text-black hover:text-2xl" /></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Links