import React from 'react'

const TiltText = (props) => {
  return (
    <div ref={props.abc} id='tiltdiv' className='mt-12' >
      <h1 className=' text-[4.2vw] leading-none uppercase font-[anzo4]'>I am <span className='text-black'>Dark Mode</span>™</h1>
      <h1 className='text-[8vw] leading-none uppercase font-[anzo2]'>designer</h1>
      <h1 className='text-[4.2vw] leading-none uppercase font-[anzo4]'>to hire</h1>
    </div>
    
  )
}

export default TiltText