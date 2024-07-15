'use client';
import Link from 'next/link'
import styles from './header.module.css'
import React from 'react'
import { usePathname } from 'next/navigation';

const NavLink = ({href,children}) => {
    const path=usePathname()
  return (
    <div>
      <Link href={href} className={path.startsWith(href) ? styles.active: undefined}>{children}</Link>
    </div>
  )
}

export default NavLink
