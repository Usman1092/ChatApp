import React from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import {Messages} from './Messages'
import {Input} from './Input'

 const Chat = () => {
  return (
  
    <div className=' chat flex basis-1/2  text-[#fff]'> 
    <div className="chatInfo  h-[50px] bg-tb w-full  ">
        <span className='ml-4'>
            jane
        </span>
        <div className="chatIcons flex gap-2 ml-[680px] w-full  ">
            <img src={ Cam} alt="" className='h-[24px] cursor-pointer' />
            <img src={Add} alt="" className='h-[24px] cursor-pointer'/>
            <img src={More} alt="" className='h-[24px] cursor-pointer' />
        </div>
       <Messages />
       <Input />
    </div>
     
    </div>
  )
}
export default Chat;