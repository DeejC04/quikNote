import { NextAuthProvider } from "./providers"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
