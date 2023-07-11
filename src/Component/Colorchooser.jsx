import React, { useState } from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

function Colorchooser({setTopColor, setBottomColor}) {

    const [ShowChooseCOlor, setShowChooseCOlor] = useState(false);

  return (
    <div className='md:block hidden'>
        <div className={`fixed bottom-10 right-0 ${ShowChooseCOlor ? 'hidden': "md:block"}`}>
            <FaLessThan onClick={()=>setShowChooseCOlor(!ShowChooseCOlor)}/>
        </div>
        <div className={` bg-white p-2 hidden fixed bottom-10 right-8 ${ShowChooseCOlor ? "md:block" : "hidden" } `}>
       <div className='flex items-center gap-3' >
            <div className='border-r-2'>
                <FaGreaterThan onClick={()=>setShowChooseCOlor(!ShowChooseCOlor)}/>
            </div>
            <div >
                choose my portfolio color
                <div className="flex gap-4">
                    <h1 className="">Top:</h1>   
                    <div onClick={()=>setTopColor('[#8A2424]/[0.26]')} className={`rounded-full border-2 h-4 w-4 bg-[#8A2424]/[0.26]`}></div>
                    <div onClick={()=>setTopColor('black')} className={`rounded-full border-2 h-4 w-4 bg-black`}></div>
                    <div onClick={()=>setTopColor('white')} className={`rounded-full border-2 h-4 w-4 `}></div>
                    <div onClick={()=>setTopColor('[#3FE4FB]/[0.56]')} className={`rounded-full border-2 h-4 w-4 bg-[#3FE4FB]/[0.56]`}></div>
                    <div onClick={()=>setTopColor('orange-600')} className={`rounded-full border-2 h-4 w-4 bg-orange-600`}></div>
                    <div onClick={()=>setTopColor('white')} className={`rounded-full border-2 h-4 w-4 `}></div>
                </div>
                <div className="flex gap-4">
                    Bottom:
                    <div onClick={()=>setBottomColor('[#8F991B]/[0.32]')} className={`rounded-full border-2 h-4 w-4 bg-[#8F991B]/[0.32]`}></div>
                    <div onClick={()=>setBottomColor('[#3FE4FB]/[0.56]')} className={`rounded-full border-2 h-4 w-4 bg-[#3FE4FB]/[0.56]`}></div>
                    <div onClick={()=>setBottomColor('')} className={`rounded-full border-2 h-4 w-4 `}></div>
                    <div onClick={()=>setBottomColor('')} className={`rounded-full border-2 h-4 w-4 `}></div>
                    <div onClick={()=>setBottomColor('')} className={`rounded-full border-2 h-4 w-4 `}></div>
                    <div onClick={()=>setBottomColor('black')} className={`rounded-full border-2 h-4 w-4 bg-black`}></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Colorchooser