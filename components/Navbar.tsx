import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { PiAirplaneTakeoffLight } from 'react-icons/pi'

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link className="flex gap-2 justify-center items-center" href="/">
        <PiAirplaneTakeoffLight className='text-green-50 w-6 h-6' />
        <p className="text-green-50 font-extrabold text-2xl">Travel.</p>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar