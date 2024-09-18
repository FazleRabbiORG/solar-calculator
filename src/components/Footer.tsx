import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-darkGray text-white py-8 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* <h3 className="font-bold mb-4">ePower</h3> */}
            <Image src="/logo.png" alt="ePower" width={150} height={100} />
            <p>Mediation of agricultural or green areas, as well as commercial and industrial roofs to photovoltaic investors.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">About US</h3>
            <ul>
              <li><Link href="/fur-projektentwickler">For project developers</Link></li>
              <li><Link href="/tippgeber">Typist</Link></li>
              <li><Link href="/magazin">magazine</Link></li>
              <li><Link href="/datenschutz">data protection</Link></li>
              <li><Link href="/impressum">imprint</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SERVICE</h3>
            <ul>
              <li><Link href="/dachflachen">Roof areas</Link></li>
              <li><Link href="/freiflachen">Open Spaces</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 ePower. All copyright reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://facebook.com" aria-label="Facebook" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.073c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.877v-6.99h-2.54v-2.888h2.54v-2.191c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.864h2.773l-.443 2.888h-2.33v6.99c4.781-.749 8.438-4.886 8.438-9.877z"/></svg>
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.834 9.834 0 01-2.827.775 4.94 4.94 0 002.163-2.725 9.862 9.862 0 01-3.127 1.196 4.924 4.924 0 00-8.39 4.482 13.978 13.978 0 01-10.156-5.15 4.923 4.923 0 001.523 6.574 4.904 4.904 0 01-2.23-.616v.062a4.924 4.924 0 003.95 4.827 4.902 4.902 0 01-2.224.085 4.93 4.93 0 004.6 3.417 9.869 9.869 0 01-6.102 2.105c-.397 0-.79-.023-1.174-.068a13.951 13.951 0 007.548 2.212c9.058 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636a10.025 10.025 0 002.466-2.559z"/></svg>
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.75 3h-15.5c-1.243 0-2.25 1.008-2.25 2.25v13.5c0 1.242 1.007 2.25 2.25 2.25h15.5c1.243 0 2.25-1.008 2.25-2.25v-13.5c0-1.242-1.007-2.25-2.25-2.25zm-11.955 16.562h-2.907v-8.945h2.907v8.945zm-1.456-10.211c-.929 0-1.681-.751-1.681-1.68 0-.928.752-1.68 1.681-1.68.928 0 1.68.752 1.68 1.68 0 .929-.752 1.68-1.68 1.68zm12.612 10.211h-2.908v-4.366c0-1.042-.019-2.382-1.452-2.382-1.454 0-1.676 1.137-1.676 2.307v4.441h-2.907v-8.945h2.792v1.221h.04c.388-.734 1.336-1.507 2.749-1.507 2.94 0 3.482 1.936 3.482 4.455v4.776z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
