'use client'

import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import '../app/globals.css'
import styles from './header.module.css'

const Header = () => {
    const { data: session, status } = useSession()
    return (
        <div className="flex flex-row justify-between ">
            
            <p className={styles.logo}><a className="border-white border-2 rounded-lg" href='/'>Q</a></p>
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
                            className="bg-cover bg-white float-left h-10 w-10"
                        />
                    )}
                </div>
                

                </>
            )}
        </div>
        
    )
}

export default Header