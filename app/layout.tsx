import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shadow Senpai — Stream & Discover',
  description: 'A premium streaming discovery platform for anime, movies, animation and more.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
