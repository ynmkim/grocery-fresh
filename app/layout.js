import './globals.css'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fresh Grocery',
  description: 'Fresh Grocery Mall',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

      {children}
      </body>
    </html>
  )
}

function NavBar() {
  return (
    <header className='header'>
      <nav className="nav-list">
        <div className="nav-left">
          <Link className="nav-item active" href="/">Home</Link>
          <Link className="nav-item" href="/products">Products</Link>
        </div>
        <div class="nav-right">
          <Link className="nav-item" href="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  )
}
