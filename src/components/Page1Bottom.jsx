import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {

  useGSAP(function () {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
  })
return (
    <div className='absolute left-0 px-16 py-7 flex items-end justify-between bottom-0 w-full '>
      <div>
        <h2 className='text-m font-[anzo2]'>BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className='text-m font-[anzo3] text-gray-400'>BESPOKE FREELANCE</h3>
      </div>
      <div id='banner'>
        <img className='mb-6' src="../../Asset/cssda-wotd-white.webp" alt="chakka1" />
        <img src="../../Asset/EN_legend_large.webp" alt="chakka2" />
      </div>
    </div>
  )
}

export default Page1Bottom