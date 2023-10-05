import './globals.css'
import "./App.css"
import "@fontsource/poppins/300.css"
import { GlobalProvider } from './_context/GlobalContext'

export const metadata = {
  title: "X it's what's happening / X",
  description: 'X',
}

export default function RootLayout({ children }) {
  return (
    <GlobalProvider>
      <html lang="en">
        <link precedence="default" rel="stylesheet" href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"}/>
        <body>{children}</body>
      </html>
    </GlobalProvider>

  )
}

