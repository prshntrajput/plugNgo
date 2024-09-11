"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0E46CB] text-white flex flex-col shadow-md shadow-white md:flex-row items-center p-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <Image src="/volteck.jpg" alt="Your Brand Logo" width={90} height={40} className="rounded-full" />
          <h1 className="ml-2 text-xl font-bold text-white"></h1>
        </div>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`md:flex flex-col md:flex-row w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          <li className="font-semibold">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-800 rounded-full" aria-label="Home">
              Home
            </Link>
          </li>
          <li className="font-semibold">
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-800 rounded-full" aria-label="About">
              About
            </Link>
          </li>
          <li className="font-semibold">
            <Link href="/services" className="block px-4 py-2 hover:bg-gray-800 rounded-full" aria-label="Services">
              Services
            </Link>
          </li>
        </ul>
        <div className="mt-4 md:mt-0 mx-2">
          <button
            className="bg-white text-gray-400 px-3 font-bold py-2 rounded-full hover:bg-black transition-colors"
            aria-label="Register"
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
