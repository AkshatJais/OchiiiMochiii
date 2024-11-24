import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page4Text = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
      gsap.from(".rotateText", {
        transform: 'rotateX(-80deg)',
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          // markers: true,
          trigger: '.rotateText',
          start: "top 95%",
          end: "top -270%",
          scrub: 2
  
        }
      })
    })


  return (
    <div>
        <div className='bg-white text-center p-10 text-black'>
      <div className='rotateText mt-16'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>Helping</h1>
      </div>

      <div className='rotateText'>
        <h1 className='text-[40vw]  text-gray-500 font-[anzo1] uppercase leading-[32vw]'>My</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>clients</h1>
      </div>

      <div className='rotateText'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>to achieve</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[40vw]  text-gray-500 font-[anzo1] uppercase leading-[32vw]'>their</h1>
      </div>

      <div className='rotateText'>
        <h1 className='text-[40vw]  text-black font-[anzo1] uppercase leading-[32vw]'>dreams!</h1>
      </div>

      
    </div>

    </div>
  )
}

export default Page4Text