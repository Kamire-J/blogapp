import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt=''fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>30.12.2023 - </span>
                <span className={styles.category}>Backend</span>
            </div>
            <Link href="/">
                <h1>
                    Lorem ipsum dolor sit amet alim consectetur 
                    adipisicing elit
                </h1>
            </Link>
            <p className={styles.desc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Cupiditate, quam nisi magni ea laborum inventore voluptatum 
                laudantium repellat ducimus unde aspernatur fuga. 
                Quo, accusantium quisquam! Harum unde sit culpa debitis.
            </p>
            <Link className={styles.link} href="/">Read More</Link>
          </div>
    </div>
  )
}

export default Card