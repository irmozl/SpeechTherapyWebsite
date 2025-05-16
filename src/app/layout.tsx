import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './globals.css';


import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="dark:bg-darkCustomBlack ">
        <Navbar/>
        <main className="container mx-auto px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
};