'use client'

import styles from './page.module.css'  
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  //const session = await getSession(authOptions);
  // console.log(session);
  const { data: session, status } = useSession()
  return(
    <div className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.heading1}>Welcome to <span className={styles.highlight}>QuikNote</span></h1>
                 <p> {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className="google-sign-in-button"
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
