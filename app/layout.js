import './globals.css'
import "./App.css"
import "@fontsource/poppins/300.css"

export const metadata = {
  title: "X it's what's happening / X",
  description: 'X',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={poppins.className}>{children}</body> */}
    </html>
  )
}
