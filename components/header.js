'use client'

import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import '../app/globals.css'
import styles from './header.module.css'

const Header = () => {
    const { data: session, status } = useSession()
    return (
        <div className={styles.main}>
            
            <div>
                <p> {!session && (
                    <>
                        <a
                            href={`/api/auth/signin`}
                            onClick={(e) => {
                                e.preventDefault()
                                signIn()
                            }}
                            className={styles.signInButton}
                        >
                            Sign In
                        </a>
                    </>
                )}
                </p>

            </div>

            {session?.user && (
                <><div className={styles.userInfo}>
                    <a
                        href={`/api/auth/signout`}
                        onClick={(e) => {
                            e.preventDefault()
                            signOut()
                        }}
                        className={styles.signOutButton}
                    >
                        Sign Out
                    </a>
                    {session.user.image && (

                        <a
                            href={`/profile`}
                            style={{ backgroundImage: `url('${session.user.image}')` }}
                            className={styles.avatar}
                        />
                    )}
                </div>

                </>

            )}
        </div>
    )
}

export default Header