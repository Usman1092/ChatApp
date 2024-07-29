import React from 'react'
import Add from '../img/user.jpeg'


 const Navbar = () => {
  return (
//   <div className='flex bg-[#03346E] h-[50px] '>
//     <div className="span">App</div>
//     <div className="user">
//         <img src={Add} alt="User Icon" />
//         <div className="span">john</div>
//         <button>Logout</button>
//         Usman
  
//     </div>
//   </div>
<div className='flex bg-[#03346E] justify-between h-[50px] w-full'>
  <div className="span pt-3 ml-2 mr-auto">App</div>
  <div className="user flex justify-end">
    <img src={Add} alt="User Icon" className='w-[24px] h-[24px] mt-3 object-cover rounded-[50%]' />
    <div className="ml-1 mr-1 span pt-3">john</div>
    <button className=" bg-[#fff] rounded-sm cursor-pointer border-none h-6 mt-3 mr-2">Logout</button>
  </div>
</div>
  )
}
export default Navbar;