import { Link } from "gatsby"
import React from "react"

interface Props {
  toggle: () => void
}

const Navbar: React.FC<Props> = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center text-white relative font-mono h-16">
      <Link to="/" className="pl-8">
        casey.work
      </Link>
      <div className="cursor-pointer px-4 md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link to="/about" className="p-4">
          about
        </Link>
        <Link to="/projects" className="p-4">
          projects
        </Link>
        <Link to="/contact" className="p-4">
          contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
