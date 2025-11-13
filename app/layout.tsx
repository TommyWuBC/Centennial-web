import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TextToSpeechButton from '@/components/TextToSpeechButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Centennial Olympic Park Community Feedback',
  description: 'Share your ideas and feedback for Centennial Olympic Park',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <TextToSpeechButton />
      </body>
    </html>
  )
}
