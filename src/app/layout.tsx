import { ThemeContextProvider } from '@/components/context/ThemeContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientThemeWrapper from '@/components/context/ClientThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wander Cruz',
  description: 'Wander Cruz Personal Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ClientThemeWrapper>
            <div>{children}</div>
          </ClientThemeWrapper>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
