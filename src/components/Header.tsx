import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  return (
    <header
      className="text-white pr-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {/* <span className="text-2xl font-bold">ePower</span> */}
          <Image src={'/logo.png'} alt="ePower" width={200} height={30} className='object-cover' />
        </Link>
        <nav className='hidden md:block'>
          <ul className="flex space-x-4 justify-center items-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/flaechen">Areas</Link></li>
            <li><Link href="/dienstleister">Service Provider</Link></li>
            <li><Link href="/magazin">Magazine</Link></li>
          </ul>
        </nav>


        <div className="md:hidden">
          <button className="text-white">
            <RxHamburgerMenu className='font-bold text-4xl' />
          </button>
        </div>


        <nav className='hidden md:block'>
          <ul className="flex space-x-4 justify-center items-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/flaechen">Areas</Link></li>
            <li><Link href="/dienstleister">Service Provider</Link></li>
            <li><Link href="/magazin">Magazine</Link></li>
          </ul>
        </nav>


      </div>
    </header>
  )
}
