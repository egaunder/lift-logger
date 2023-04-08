export const metadata = {
  title: 'lift-logger',
  description: 'lift-logger workout tracking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
