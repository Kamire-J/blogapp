import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuPosts.module.css'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
         {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.backend}`}>
              Backend
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 11.02.22</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage &&(<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.frontend}`}>
              Frontend
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 11.02.22</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.analytics}`}>
              Analytics
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 11.02.22</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage &&(<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.backend}`}>
              Mobile
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 11.02.22</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts