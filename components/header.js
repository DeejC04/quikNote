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
                            className={styles.googleSigninButton}
                        >
                            Sign in
                        </a>
                    </>
                )}
                </p>

            </div>

            {session?.user && (
                <><div className={styles.userInfo}>
                    {session.user.image && (

                        <span
                            style={{ backgroundImage: `url('${session.user.image}')` }}
                            className={styles.avatar}
                        />
                    )}

                    <span>
                        <p>Signed in as <strong>{session.user.email ?? session.user.name}</strong></p>

                    </span>
                    <a
                        href={`/api/auth/signout`}
                        onClick={(e) => {
                            e.preventDefault()
                            signOut()
                        }}
                        className={styles.signOutButton}
                    >
                        Sign out
                    </a>
                </div>

                </>

            )}

        </div>
    )
}

export default Header