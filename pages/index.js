import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import HomePage from './homePage'
import CanvasModel from '@/components/canvas'
import Customizer from './Customizer'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden transition-all ease-in">
    <HomePage />
    <CanvasModel />
    <Customizer />
  </main>

  )
}
