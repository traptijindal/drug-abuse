import React from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="relative w-full h-16 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2  sm:px-6 lg:px-8">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="\images\WhatsApp Image 2024-02-04 at 12.06.58 PM.jpeg" className="h-12" alt="" />
          </a>
          <div className="hidden lg:block navbar-line">
            <ul className="inline-flex relative space-x-8">

              <Link to='/'><li className="text-base font-semibold text-gray-800 hover:text-gray-900">Home</li></Link>
              <Link to='/counselor'><li className="text-base font-semibold hover:cursor-pointer text-gray-800 hover:text-gray-900">Counsellor</li></Link>
              <Link to='/about'><li className="text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">About Us</li></Link>
              <Link to='/contact'><li className="text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Contact</li></Link>
            </ul>
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <img className='h-16 w-16 ' src="\images\WhatsApp Image 2024-02-04 at 12.06.58 PM.jpeg" alt="" />
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4 list-none">
                      <Link to="/"> <li className="text-sm font-semibold text-gray-800 hover:text-gray-900">Home</li></Link>
                      <Link to='/councellor'><li className="text-sm font-semibold text-gray-800 hover:text-gray-900">Counsellor</li></Link>
                      <Link to='/about'><li className="text-sm font-semibold text-gray-800 hover:text-gray-900">About Us</li></Link>
                      <Link to="/contact"><li className="text-sm font-semibold text-gray-800 hover:text-gray-900">Contact</li></Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  )
}