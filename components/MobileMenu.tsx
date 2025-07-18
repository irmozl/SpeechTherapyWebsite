import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="md:hidden bg-customGreen-lightest dark:bg-darkCustomGreen-lightest shadow-md px-4 py-4">
      <nav className="flex flex-col gap-4 text-sm text-customGreen-darkest dark:text-gray-300 font-medium">
        <Link href="/" onClick={onClose} className=' hover:shadow-lg px-2 py-1 rounded'>Anasayfa</Link>
        <Link href="/about" onClick={onClose} className=' hover:shadow-lg px-2 py-1 rounded'>Hakkımızda</Link>
        <Link href="/servicesTherapy" onClick={onClose} className=' hover:shadow-lg px-2 py-1 rounded'>Hizmetler</Link>
        <Link href="/contact" onClick={onClose} className=' hover:shadow-lg px-2 py-1 rounded'>İletişim</Link>
        <Link href="/blog" onClick={onClose} className=' hover:shadow-lg px-2 py-1 rounded'>Blog</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;