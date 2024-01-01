import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>devTalk</h1>   
        </div>
        <p className={styles.desc}>
          Setting short term goals provides relatively easy targets <br/>
          and the perception of progress is much better.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" width={18} height={18} />
          <Image src="/youtube.png" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Mobile Applications</Link>
          <Link href="/">Software Development</Link>
          <Link href="/">Machine Learning</Link>
          <Link href="/">Data Analytics</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Twitter</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Linkedin</Link>
          <Link href="/">Facbook</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer