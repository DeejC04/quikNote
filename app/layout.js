import { NextAuthProvider } from "./provider"
import Header from "@/components/header"

import './globals.css'

export const metadata = {
  title: "QuikNote",
  description: "Simplistic note taking"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-white flex flex-col justify-center">
        <NextAuthProvider>
          <Header />
          
          {children}
          </NextAuthProvider>
      </body>
    </html>
  )
}
