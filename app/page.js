

import styles from './page.module.css'  
import { signIn, signOut, useSession } from 'next-auth/react'
import Header from '@/components/header'

export default function Home() {

  return(
    <div className="justify-center">
      <div className="text-center">
        <div className={styles.signIn}><h1 className={styles.heading1}>Welcome to <span className="text-yellow-300">QuikNote</span></h1>
                 
        </div>
      </div>
    </div>
  )
}


