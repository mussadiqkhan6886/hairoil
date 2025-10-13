import Collection from '@/components/Collection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "IqzaibEssence Collections",
  description:
    "Explore IqzaibEssence’s premium range of natural and organic hair oils and treatments made from argan, castor, coconut, and rosemary. Designed to promote hair growth, reduce hair fall, and bring back shine naturally available across Pakistan.",
}

const page = () => {
  return (
    <div>
      <Collection />
    </div>
  )
}

export default page
