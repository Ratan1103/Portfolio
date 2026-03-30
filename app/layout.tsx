import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: 'Ratan Sanjay — Full-Stack Developer',
  description: 'Computer Science undergraduate at NIE Mysore with strong experience building scalable full-stack web applications using React, Django, DRF, and PostgreSQL. Solved 400+ DSA problems. Google & Cisco certified.',
  keywords: ['Full-Stack Developer', 'React', 'Django', 'Python', 'Software Engineer', 'Ratan Sanjay'],
  authors: [{ name: 'Ratan Sanjay' }],
  openGraph: {
    title: 'Ratan Sanjay — Full-Stack Developer',
    description: 'Computer Science undergraduate at NIE Mysore with strong experience building scalable full-stack web applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${syne.variable} font-sans antialiased bg-[#07090f]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
