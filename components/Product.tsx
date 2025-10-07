import { instrumental, styleScript } from '@/fonts/font'
import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <section className="py-20 bg-green-50">
        <h2 className={`${styleScript.className} text-6xl text-center mb-10 font-main`}>Our Product</h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-16">
            
            {/* Left Side - Product Image */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/oil (10).jpg"
                    alt="Herbal Hair Oil Bottle"
                    className=" w-[80%] "
                />
            </div>

            {/* Right Side - Product Description */}
            <div className="md:w-1/2">
            <h2 className={`${instrumental.className} text-5xl text-main mb-6`}>Pure Herbal Hair Oil</h2>
            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                Discover the secret to naturally radiant, healthy, and strong hair with our
                <span className="text-green-700 font-semibold"> Pure Herbal Hair Oil</span>.  
                Made with a blend of ancient herbs and essential oils, this luxurious formula deeply
                nourishes your scalp, strengthens hair roots, and reduces breakage — leaving your
                hair visibly shinier and smoother.  
                <br /><br />
                Enriched with ingredients like Amla, Bhringraj, Coconut, and Castor Oil, it promotes
                natural growth, prevents dandruff, and restores lost vitality.  
                Free from parabens, sulfates, and mineral oils — it’s 100% natural, safe, and effective for all hair types.
            </p>

            <Link href={"/products"} className="mt-8 bg-main text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition-colors">
                Shop Now
            </Link>
            </div>

        </div>
        </section>

  )
}

export default Product
