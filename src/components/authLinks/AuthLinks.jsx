"use client"

import React, { useState } from 'react'
import styles from './authlinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  //temporary
  const status="notAuthenticated"
  return (
   <>
   {status=='notAuthenticated'?(
    <Link href="/login">Login</Link>
   ) : (
    <>
    <Link href="/wrrite">Write</Link>
    <span className={styles.link}>Logout</span>
    </>
   )}
   <div className={styles.burger}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
   </div>
   </>
  )
}

export default AuthLinks