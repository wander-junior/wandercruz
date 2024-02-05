import { ThemeContextProvider } from '@/components/context/ThemeContext'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientThemeWrapper from '@/components/context/ClientThemeContext'
import { Header } from '@/components/modules/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Wander Cruz',
    description: 'Wander Cruz Personal Blog',
}

export default function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <ThemeContextProvider>
                    <ClientThemeWrapper>
                        <>
                            <Header />
                            {children}
                        </>
                    </ClientThemeWrapper>
                </ThemeContextProvider>
            </body>
        </html>
    )
}
