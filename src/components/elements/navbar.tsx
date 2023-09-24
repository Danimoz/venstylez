'use client';

import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/logo.png';
import { useState } from "react";

const navbarSections = [
  { name:'Home', link: '/' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'Shop', link: '/shop' },
]

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-9 top-0 sticky border-orange-100 border-b-2 bg-white z-50">
      <nav className="flex h-20 items-center justify-between">
        <div className="flex md:mx-auto items-end">
          <Image src={logo} alt='Venstylez Logo' width={56} height={56}/>
          <Link href='/' className="text-4xl font-bold">enstylez</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          {
            navbarSections.map((section) => (
              <Link key={section.name} href={section.link} className="p-3">{section.name}</Link>
            ))
          }
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src='/menu.svg' alt='Menubar Toggle' width={30} height={30} priority />
          </button>
        </div>
      </nav>

      <div className={isMenuOpen ? 'w-full' : 'hidden'}>
        {
          navbarSections.map((section) => (
            <Link key={section.name} href={section.link} className="block hover:bg-[#7D11F9] hover:rounded-xl hover:text-white w-full p-3">{section.name}</Link>
          ))
        }
      </div>
    </header>
  )
}