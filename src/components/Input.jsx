import React from 'react'
import Attach from '../img/attach.png'
import Img from '../img/img.png'

export const Input = () => {
  return (
   <div className="input flex  items-center justify-between h-[50px] bg-[#fff] text-[#333] p-[10px]">
    <input type="text" placeholder='some text....' className='outline-none w-[100%] text-xl border-none ' />
    <div className="send flex items-center gap-2">
        <img src={Attach} alt="attach" className='h-[24px] cursor-pointer' />  
        <input type="file" id='file' style={{display: 'none'}}/>
        <label htmlFor='file'><img src={Img} alt="send img" className='cursor-pointer'/></label>
        <button  className='bg-[#8da4f1] text-[#fff] rounded-[20%] p-[5px] '>send</button>
    </div>
     
   </div>
  )
}
