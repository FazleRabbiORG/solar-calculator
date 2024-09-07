import Link from 'next/link'

export default function Header() {
  return (
    <header
      className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold">ePower</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
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
