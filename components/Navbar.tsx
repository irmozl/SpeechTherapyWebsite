'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { FaBrain } from "react-icons/fa6";

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-customGreen-light dark:bg-darkCustomGreen-light  shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
		<FaBrain className="cursor-pointer size-10 text-customGreen-lightest dark:text-customGreen-light" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-md font-semibold dark:text-customGreen-light text-customWhite">
          <Link href="/" className='hover:shadow-lg '>Anasayfa</Link>
          <Link href="/about" className='hover:shadow-lg '>Hakkımızda</Link>
          <Link href="/servicesTherapy" className='hover:shadow-lg '>Hizmetler</Link>
          <Link href="/contact" className='hover:shadow-lg '>İletişim</Link>
          <Link href="/blog" className='hover:shadow-lg '>Blog</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="w-6 h-6 text-customWhite dark:text-gray-300" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="w-6 h-6 text-customWhite dark:text-gray-300" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu Component */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
};
    