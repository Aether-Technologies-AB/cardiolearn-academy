import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'
// import { AuthProvider } from '@/contexts/AuthContext' // Temporarily disabled

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'CardioLearn Academy - Educación Cardiovascular Avanzada',
  description: 'Plataforma líder en educación médica cardiovascular con cursos certificados, casos clínicos y mentorías de expertos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${inter.variable} font-sans antialiased`}
        style={{ 
          backgroundColor: 'var(--color-charcoal-black)', 
          color: 'var(--color-pure-white)' 
        }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
