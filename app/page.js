

import styles from './page.module.css'  
import { signIn, signOut, useSession } from 'next-auth/react'
import Header from '@/components/header'

export default function Home() {

  return(
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={styles.signIn}><h1 className={styles.heading1}>Welcome to <span className={styles.highlight}>QuikNote</span></h1>
                 
        </div>
      </div>
    </div>
  )
}


