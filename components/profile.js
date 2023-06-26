'use client'

import React, { useEffect, useState } from 'react';
import { getProviders, useSession, getSession } from 'next-auth/react'
import styles from './profile.module.css'
import { PrismaClient } from '@prisma/client'
import ProviderIcon from './providerIcon.js'


const Profile = () => {
    const { data: session, status } = useSession()

    if (!session) {
        return <div>You are not logged in.</div>
      }

    return (
        <div className={styles.profileBox}>
            <div className={styles.identifiers}>
                <img src={session?.user.image}></img>
                {session?.user.name}
            </div>
            <div className={styles.details}>
                Email: {session?.user.email}
                <hr></hr>
                <p>Signed in with <ProviderIcon /></p>
                <hr></hr>
            </div>
        </div>
    )
}


export default Profile