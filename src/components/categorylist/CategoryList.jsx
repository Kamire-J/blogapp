import React from 'react'
import styles from './categorylist.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Topics</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.analytics}`}>
            <Image  
              src="/style.png" 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image} 
            />
            Analytics
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.machine}`}>
            <Image  
              src="/fashion.png" 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image} 
            />
            ML
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.frontend}`}>
            <Image  
              src="/coding.png" 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image} 
            />
            frontend
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.backend}`}>
            <Image  
              src="/travel.png" 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image} 
            />
            Backend
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.mobile}`}>
            <Image  
              src="/culture.png" 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image} 
            />
            Mobile
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.games}`}>
            <Image  
              src="/culture.png" 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image} 
            />
            Games
          </Link>
      </div>
    </div>
  )
}

export default CategoryList