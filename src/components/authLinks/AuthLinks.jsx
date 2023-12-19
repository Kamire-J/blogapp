import React from 'react'
import styles from './authlinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
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
   </>
  )
}

export default AuthLinks