import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prerna Portfolio',
  description: 'Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-[#3D3E3F]'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
