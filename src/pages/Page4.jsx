import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen p-3 bg-white'>
      <div className='h-full w-full texture flex justify-between rounded-[30px]'>
        <div className='relative p-10 text-[20vw] ml-6 leading-none flex flex-col text-gray-600 font-[anzo1]'>
          <h1 className='mt-[10px]'>WHAT</h1>
          <h1 className='text-white uppercase -mt-12 '>I DO</h1>
          <h3 className='text-white text-lg font-[anzo2]'>I DESIGN AND DEVELOP</h3>
          <h3 className='text-zinc-400 text-lg font-[anzo3]'>MODERN, IMPACTFUL AND LUXURIOUS</h3>
          <h3 className='text-white text-lg font-[anzo2]'>websites that seamlessly bridge your goals with needs of your clients.</h3>
        </div>
        <div className='mt-32 mr-32'>
          <img  src="../../Asset/moonside.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page4