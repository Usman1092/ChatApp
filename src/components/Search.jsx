import React from 'react'
import img from '../img/user.jpeg';

export const Search = () => {
  return (
    <div className='search  border-b-2 border-[#fff]'>
        <div className="searchForm">
            <input type="text" placeholder="Find a user" className=' ml-2 bg-[#3e3c61] text-[#fff] border-none   outline-none' />
        </div>
        <div className="userChat flex items-center pb-2 gap-2 cursor-pointer hover:bg-[#2f2d52]">
            <img src={img} alt="" className='w-[50px] h-[50px] rounded-[50%] mt-4' />
            <div className="userChatInfo">
                <div className="span text-[#fff]">
                       jane
                </div>
            </div>
        </div>
        
    </div>
  )
}
