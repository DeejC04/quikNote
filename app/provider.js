// exports a function with children as arguments to grant session data

'use client'

import { SessionProvider } from "next-auth/react"

export const NextAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
