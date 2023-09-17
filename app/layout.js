import './globals.css'
import { Inter } from 'next/font/google';
import React from 'react';
import NavBar from './components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fresh Grocery',
  description: 'Fresh Grocery Mall',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='header'>
          <NavBar />
        </header>
      {children}
      </body>
    </html>
  )
}
