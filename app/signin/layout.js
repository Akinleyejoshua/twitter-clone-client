

export const metadata = {
  title: 'Signin',
  description: 'Twitter Signin',
}

export default function SigninLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={poppins.className}>{children}</body> */}

    </html>
  )
}
