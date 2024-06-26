import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Navbar from './_components/navbar'
import HomePage from './_components/home-page'
import Background from '../(main)/background/page'

export default function Home() {
  return (
    <div className='h-full flex flex-col '>
    <Navbar/>
    <HomePage/>
    <Background/>
    </div>
    
  )
}
