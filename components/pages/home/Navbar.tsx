import React from "react";

export function Navbar() {
  return(
    <header className="text-gray-600 body-font fixed top-0 w-full bg-white z-10 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">{"<R11 />"}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-gray-900">
            About
          </a>
          <a href="#projects" className="mr-5 hover:text-gray-900">
            Projects
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black text-white rounded text-base mt-4 md:mt-0"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
