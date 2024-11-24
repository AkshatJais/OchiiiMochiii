import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen relative p-5 bg-white'>
      <div className='h-full w-full bg-black rounded-[50px] overflow-hidden'>
        <video autoplay='true' loop muted className='w-full h-full object-cover ' src="../../Asset/moon.mp4"></video>
        <h1 className='font-[anzo1] text-[40vw] absolute uppercase text-white left-24 -bottom-40'>about</h1>
      </div>
    </div>
  )
}

export default Page5