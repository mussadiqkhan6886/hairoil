import { instrumental, styleScript } from '@/fonts/font'
import Link from 'next/link'
import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const Collection = () => {
  return (
    <section className="py-16 min-h-screen bg-main">
    <div className="container mx-auto text-center">
    <h2 className={`${styleScript.className} text-6xl  text-primary mb-12`}>
      Our Collections
    </h2>

    <div className="flex px-5 justify-center">

      {/* Card 3 */}
      <div className="bg-primary h-full max-w-[400px] overflow-hidden">
        <img
          src="/oil (1).jpg"
          alt="Coconut Hair Oil"
          className="w-full h-[65%] object-cover object-bottom hover:scale-105 transition-all duration-200"
        />
        <div className="p-6 text-left h-full">
          <h3 className={`${instrumental.className} text-4xl  text-main mb-3`}>Herbal Oil</h3>
          <p className="text-font text-sm">
            Purely crafted from nature’s finest herbs, our oil deeply nourishes your scalp and strengthens each strand.
            Experience softer, shinier hair with every use.
            Bring life back to dull and damaged hair — naturally.
          </p>
          <button className='mt-6 py-1.5 w-full  border border-main ' > <Link href={"/collection/oil"}>Visit</Link> <FiArrowRight className='inline-block ml-1' /></button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Collection
