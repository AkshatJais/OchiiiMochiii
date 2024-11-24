import React, { useRef, useState } from 'react'
import TiltText from "../components/TiltText"; 
import Page1Bottom from "../components/Page1Bottom"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal,setXVal] = useState(0)
  const [yVal,setYVal] = useState(0)

  const mouseMoving= (e) =>{
    
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)
    setYVal((e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20 )

    // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }

useGSAP(function(){
  gsap.to(tiltRef.current,{
    transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
    duration: 3,
    ease:'power4.out'
  })
},[xVal,yVal])

  return (
    <div id='page1' onMouseMove={(e)=>{
      mouseMoving(e)
      }}  className='bg-white relative text-white p-3 h-screen'>
        <div id='page1-in' className="relative h-full w-full p-12 shadow-xl shadow-gray-700 bg-cover rounded-[35px] bg-[url('../Asset/ANZO.webp')] bg-zinc-900">
        <img className="text-white h-16 ml-3  " src="../../Asset/Frame 53.webp" alt="Logo" />
       
        <TiltText abc={tiltRef}/>
        <Page1Bottom/>
      
        </div>
   
          
    </div>
  )
}

export default Page1
