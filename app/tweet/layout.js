
export const metadata = {
  title: "Home",
  description: 'X',
}

export default function TweetLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={poppins.className}>{children}</body> */}

    </html>
  )
}
