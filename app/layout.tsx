import Navber from '@/components/shared/Navber'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'],weight:['100','200','300','400','500','600','700','800','900'] },)

export const metadata: Metadata = {
  title: 'welcome to nnur store',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
