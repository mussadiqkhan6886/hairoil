import { cormorant, styleScript } from '@/fonts/font';
import Link from 'next/link'
import React from 'react'
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";


const Header = () => {
  return (
    <header>
      <div className='bg-main py-2 font-bold text-primary'>
        <h2 className='text-center'>DELIVERY ALL OVER PAKISTAN IN 3-4 DAYS !</h2>
      </div>
      <div className='px-5 md:px-16 lg:px-28 flex justify-between items-center py-4'>
        <div className='flex gap-10 items-center'>
          <h1 className={`${styleScript.className} capitalize text-5xl`}> Iqzaibessence</h1>
          <div className='flex gap-7 text-sm'>
            <Link href={"/"}>HOME</Link>
            <Link href={`/products`}>CATALOG</Link>
            <Link href={"/contact"}>CONTACT</Link>
          </div>
        </div>
        <div className='flex gap-7'>
          <FiSearch />
          <FiUser />
          <FiShoppingCart />
        </div>
      </div>
    </header>
  )
}

export default Header
