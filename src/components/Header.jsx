import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full text-white flex item-center justify-end z-10 py-16 px-16'>
        <button className='bg-black border-4 font-[madefor] rounded-full px-10 py-3 hover:bg-gray-500'>Hire Me</button>
        {/* <i className='ri-more-2-fill text-2xl ml-3'></i> */}
        <img src="../Asset/menu.svg" alt="menu" className="w-6 h-6 cursor-pointer " />
    </div>
  )
}

export default Header