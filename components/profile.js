'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import styles from './profile.module.css'

const Profile = () => {
    const { data: session, status } = useSession()
    return (
        <div className={styles.profileBox}>
            <div className={styles.identifiers}>
                <img src={session?.user.image}></img>
                {session?.user.name}
            </div>
            <div className={styles.details}>
                Email: {session?.user.email}
            </div>
        </div>
    )
}

export default Profile