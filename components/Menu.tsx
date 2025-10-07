'use client';

import Link from 'next/link';
import React from 'react'

const Menu = ({setShowMenu}: {setShowMenu: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <aside className='bg-main w-full p-10 absolute top-0 h-screen left-0'>
        <p className='text-white absolute right-10 top-10 ' onClick={() => setShowMenu(false)}>x</p>
       <div className='flex flex-col gap-7 p-10 text-sm text-white'>
            <Link href={"/"}>HOME</Link>
            <Link href={`/products`}>CATALOG</Link>
            <Link href={"/contact"}>CONTACT</Link>
        </div>
    </aside>
  )
}

export default Menu
