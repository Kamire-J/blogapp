import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} alt='facebook' />
        <Image src="/instagram.png" width={24} height={24} alt='instagram' />
        <Image src="/tiktok.png" width={24} height={24} alt='tiktok' />
        <Image src="/youtube.png" width={24} height={24} alt='youtube' />
      </div>
      <div className={styles.logo}>
        Dev_Talks
      </div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <Link href="/">Portfolio</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar