import Link from 'next/link'
import React from 'react'
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.analytics}`} >
            Analytics
        </Link>
        <Link href="/blog?cat=frontend" className={`${styles.categoryItem} ${styles.frontend}`} >
            Frontend
        </Link>
        <Link href="/blog?cat=backend" className={`${styles.categoryItem} ${styles.backend}`} >
            Backend
        </Link>
        <Link href="/blog?cat=machine" className={`${styles.categoryItem} ${styles.machine}`} >
            ML
        </Link>
        <Link href="/blog?cat=mobile" className={`${styles.categoryItem} ${styles.mobile}`} >
            Mobile
        </Link>
        <Link href="/blog?cat=games" className={`${styles.categoryItem} ${styles.games}`} >
            Game
        </Link>
    </div>
  )
}

export default MenuCategories