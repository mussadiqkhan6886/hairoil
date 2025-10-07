import { instrumental, styleScript } from '@/fonts/font'
import React from 'react'

const WhyUs = () => {
  return (
    <section className="py-24 px-28 text-center">
        <h2 className={`${styleScript.className} text-5xl mb-10 text-main`}>Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
            
            <div className="p-6 shadow-lg rounded-2xl bg-green-50 transition-transform">
            <h3 className={`${instrumental.className} text-4xl text-green-700 mb-3`}>100% Natural Ingredients</h3>
            <p className="text-gray-700">
                Our hair oil is crafted with pure herbal extracts, free from chemicals, parabens, and sulfates — perfect for all hair types.
            </p>
            </div>

            <div className="p-6 shadow-lg rounded-2xl bg-green-50 hover:scale-105 transition-transform">
            <h3 className={`${instrumental.className} text-4xl text-green-700 mb-3`}>Visible Results</h3>
            <p className="text-gray-700">
                Experience stronger, shinier, and healthier hair within weeks — proven results from real users who trusted nature’s touch.
            </p>
            </div>

            <div className="p-6 shadow-lg rounded-2xl bg-green-50 hover:scale-105 transition-transform">
            <h3 className={`${instrumental.className} text-4xl text-green-700 mb-3`}>Traditionally Inspired</h3>
            <p className="text-gray-700">
                Inspired by ancient herbal remedies, our formula blends tradition with modern hair care science for the best nourishment.
            </p>
            </div>
        </div>
        <video src={"/anim.mp4"} playsInline muted autoPlay loop className='mt-10 rounded-4xl' />
    </section>

  )
}

export default WhyUs
