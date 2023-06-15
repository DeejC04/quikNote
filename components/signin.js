'use client'

import { signIn, signOut, SessionProvider } from "next-auth/react"

export default function SignIn() {
  const { data: session } = <SessionProvider>useSession()</SessionProvider>
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className="google-sign-in-button" onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  )
}
