import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import styles from './header.module.css'
import React from 'react'
import Image from 'next/image'
import HeaderBackground from './HeaderBackground'
import NavLink from './NavLink'

const Header = () => {
    
  return (
    <>
    <HeaderBackground/>
    <header className={styles.header}>
        <Link className={styles.logo} href='/'><Image src={logoImg} alt="FOODAPPLOGO"/>NextLevel Food App</Link>
        <nav className={styles.nav}>
            <ul>
                <li>
                <NavLink href="/meals">Browse Meals</NavLink>
                
                </li>
                <li>
                <NavLink href="/community">Explore Community</NavLink>
                
                </li>
            </ul>
        </nav>
    </header>
    
</>
  )
}

export default Header
