import { instrumental } from '@/fonts/font'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-[83vh] relative'>
      <div className='w-full h-full'>
        <video className='w-full h-full object-cover' src={"/femaleHair.mp4"} muted playsInline loop autoPlay /> 
      </div>
      <h2 className={`${instrumental.className} text-6xl font-bold uppercase leading-16 absolute top-15 left-5  text-font`}>Unveil the Secret to Lustrous, <br /> Silky Hair</h2>
    </section>
  )
}

export default Hero
