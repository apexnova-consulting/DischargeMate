import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DischargeMate - Intelligent Patient Discharge Management',
  description: 'AI-powered discharge management platform that reduces readmissions, improves outcomes, and integrates seamlessly with your existing workflow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
