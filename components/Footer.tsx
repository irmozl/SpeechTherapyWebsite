import React from 'react';
import Link from 'next/link';
import { FaSquareInstagram,FaLinkedin,FaBrain } from "react-icons/fa6";

export default function Footer () {
  return (
    <footer className="bg-customGreen-lightest dark:bg-darkCustomGreen-lightest text-customGreen-dark dark:text-customGreen-light shadow-md mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/"><FaBrain className="size-10 text-customGreen-light mb-7" /></Link>
          <p className="mt-2 text-sm dark:text-gray-300">Dil ve konuşma terapisi alanında uzmanlaşmış bir ekip ile çalışın.</p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2 text-customGreen-midLight">Sayfalar</h4>
          <ul className="space-y-1 text-sm dark:text-gray-300">
            <li><Link href="/" className='hover:shadow-md'>Anasayfa</Link></li>
            <li><Link href="/about" className='hover:shadow-md'>Hakkımızda</Link></li>
            <li><Link href="/servicesTherapy" className='hover:shadow-md'>Hizmetler</Link></li>
            <li><Link href="/contact" className='hover:shadow-md'>İletişim</Link></li>
			      <li><Link href="/contact" className='hover:shadow-md'>Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2 text-customGreen-midLight">Sosyal Medya Hesapları</h4>
          <div className="flex gap-4 text-customGreen-midDark dark:text-gray-300 ">
            <a href="https://www.instagram.com/dkt.idilkocasari/"><FaSquareInstagram  className="w-7 h-7" /></a>
            <a href="https://www.linkedin.com/in/idil-kocasar%C4%B1%C4%B1/"><FaLinkedin className="w-7 h-7" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-3 border-t border-gray-200">
        © {new Date().getFullYear()} <a href="https://sidoma.com.tr/" className='font-semibold'>Sidoma</a> All rights reserved.
      </div>
    </footer>
  );
};
