import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"
import React from "react"
import ThemeToggle from "./ThemeToggle"

interface Props {
  toggle: () => void
}

const Navbar: React.FC<Props> = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center darkMode max-w-screen-md mx-auto inset-x-0 fixed top-0 w-full font-mono h-16 text-lg">
      <div className="flex items-center">
        <Link
          to="/"
          className="pl-8 hover:text-lightHover dark:hover:text-darkHover"
        >
          casey.work
        </Link>
        <ThemeToggle />
      </div>
      <div className="cursor-pointer pr-8 md:hidden" onClick={toggle}>
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
      <div className="pr-4 md:flex hidden">
        <a
          href="#about"
          className="p-4 hover:text-lightHover dark:hover:text-darkHover"
        >
          about
        </a>
        <a
          href="#projects"
          className="p-4 hover:text-lightHover dark:hover:text-darkHover"
        >
          projects
        </a>
        <a
          href="#contact"
          className="p-4 hover:text-lightHover dark:hover:text-darkHover"
        >
          contact
        </a>
        <a
          href="https://github.com/caseyharvey"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4"
        >
          <FaGithub className="w-6 h-6 hover:text-lightHover dark:hover:text-darkHover" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
