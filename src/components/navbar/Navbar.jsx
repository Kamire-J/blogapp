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
        {/* <Image src="/facebook.png" width={24} height={24} alt='facebook' /> */}
        <Image src="/instagram.png" width={24} height={24} alt='instagram' />
        <Image src="/youtube.png" width={24} height={24} alt='youtube' />
      </div>
      <div className={styles.logo}>
        devTalk
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Portfolio</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar