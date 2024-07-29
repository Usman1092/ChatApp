import React from 'react'
import user from '../img/user.jpeg'

 const Chats = () => {
  return (
<>
      
         <div className="userChat mt-4 flex flex-row items-center pb-2 gap-2 cursor-pointer hover:bg-[#2f2d52]">
           <img src={user} alt="User" className='rounded-[50%] w-[30px] h-[30px] ' />
            <div className="userChatInfo ">
              <span className='font-bold text-[#fff] ' >Name</span>
              <p className='fontsize-sm text-[#fff]'>Hello!</p>
   
         </div>
      </div>
  
    
  <div className="userChat mt-4 flex flex-row items-center pb-2 gap-2 cursor-pointer hover:bg-[#2f2d52]">
  <img src={user} alt="User" className='rounded-[50%] w-[30px] h-[30px] ' />
   <div className="userChatInfo ">
     <span className='font-bold text-[#fff] ' >Name</span>
     <p className='fontsize-sm text-[#fff]'>Hello!</p>

</div>
</div>

  
         <div className="userChat mt-4 flex flex-row items-center pb-2 gap-2 cursor-pointer hover:bg-[#2f2d52]">
           <img src={user} alt="User" className='rounded-[50%] w-[30px] h-[30px] ' />
            <div className="userChatInfo ">
              <span className='font-bold text-[#fff] ' >Name</span>
              <p className='fontsize-sm text-[#fff]'>Hello!</p>
   
         </div>
      </div>
</>
  )
}
export default Chats;