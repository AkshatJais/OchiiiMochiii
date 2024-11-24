import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const page2 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from(".rotatetextpage2", {
      transform: 'rotateX(-80deg)',
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        // markers: true,
        trigger: '.rotatetextpage2',
        start: "top 90%",
        end: "top -270%",
        scrub: 2

      }
    })
  })



  return (
    <div className='bg-white text-center p-10 text-black'>
      <h3 className='text-gray-400 text-xl font-[anzo3]'>©  anzo.studio 2024 | designed and developed</h3>
      <div className='rotatetextpage2 mt-16'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>IMPACTFUL</h1>
      </div>

      <div className='rotatetextpage2'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>DESIGN</h1>
      </div>

      <div className='rotatetextpage2'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>IS THE</h1>
      </div>
      <div className='rotatetextpage2'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>design</h1>
      </div>

      <div className='rotatetextpage2'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>that</h1>
      </div>

      <div className='rotatetextpage2'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>works</h1>
      </div>

      <div className='scale-50 '><img src="../../Asset/iconpack.svg" alt="" /></div>
      <div className='h-[2px] w-1/3 mt-20 relative left-1/2 -translate-x-1/2 bg-gray-600'></div>
    </div>

  )
}

export default page2