'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
  const menuData = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
  ]
  const pathname = usePathname()

  return (
    <nav className="nav-list">
      <div className="nav-left">
        {
          menuData.map((menu, i) => {
            return (
              <Link className="nav-item" href={ menu.path } style={{ color: pathname === menu.path ? '#3BB77E' : '#253D4E', fontWeight: pathname === menu.path ? 'bold' : 'normal',}} key="{i}">{ menu.name }</Link>
            )
          })
        }
      </div>
      <div class="nav-right">
        <Link className="nav-item" href="/cart">Cart</Link>
      </div>
    </nav>
  )
}