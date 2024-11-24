import React from 'react'

const Page9 = () => {
  return (
    <div className='bg-[url("../Asset/Black_and_White_Watercolor_Background.jpg")] h-[120vh] w-full absolute fixed bg-cover' style={{backgroundAttachment: 'fixed'}}>
        <img className='relative h-[120vh] w-full object-cover mx-auto' src="../../Asset/siatara.webp" alt="" style={{transform: 'translateY(calc(var(--scroll) * -0.3))'}} />
        <img className='h-[180vh] mx-auto object-cover' src="../../Asset/Astro Me.webp" alt="" />
    </div>
  )
}

export default Page9