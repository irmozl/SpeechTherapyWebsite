'use client'

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './globals.css';
import { usePathname } from 'next/navigation';
import LayoutDashboard from '../../components/Dashboard/layoutDashboard';


import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
   const pathname = usePathname();

  // Eğer dashboard sayfasındaysa farklı layout döndür
  if (pathname.startsWith("/dashboard")) {
    return (
      <html>
        <body>
          <LayoutDashboard>{children}</LayoutDashboard>
        </body>
      </html>
    );
  }



  return (
    <html>
      <body className="dark:bg-darkCustomBlack ">
        <Navbar/>
        <main className="container mx-auto md:px-10 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};