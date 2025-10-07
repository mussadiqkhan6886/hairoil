'use client';

import { styleScript } from '@/fonts/font';
import Link from 'next/link'
import React, { useState } from 'react'
import { FiUser, FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import Menu from './Menu';


const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <div className='bg-main py-2 font-bold text-primary'>
        <h2 className='text-center text-sm sm:text-base'>DELIVERY ALL OVER PAKISTAN IN 3-4 DAYS !</h2>
      </div>
      <div className='px-3 sm:px-6 md:px-16 lg:px-28 flex justify-between items-center py-4'>
        <div className='flex gap-10 items-center'>
          <h1 className={`${styleScript.className} capitalize text-4xl md:text-5xl`}> Iqzaibessence</h1>
          <div className='hidden md:flex gap-7 text-sm '>
            <Link href={"/"}>HOME</Link>
            <Link href={`/products`}>CATALOG</Link>
            <Link href={"/contact"}>CONTACT</Link>
          </div>
        </div>
        <div className='flex gap-7'>          
          <FiSearch />
          <FiUser className='hidden md:inline-block' />
          <Link href={"/Cart"}>
            <FiShoppingCart />
          </Link>
          <FiMenu onClick={() => setShowMenu(true)} className='inline-block md:hidden' />
          {showMenu && <Menu setShowMenu={setShowMenu} />}
        </div>
      </div>
    </header>
  )
}

export default Header
