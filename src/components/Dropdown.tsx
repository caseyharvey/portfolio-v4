import React from "react"
import { FaGithub } from "react-icons/fa"

interface Props {
  toggle: () => void
  isOpen: boolean
}

const Dropdown: React.FC<Props> = ({ toggle, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-5 p-8 mt-16 text-right items-center text-white fixed w-full bg-black text-xl shadow-2xl font-mono"
          : "hidden"
      }
      onClick={toggle}
    >
      <a href="#about" className="py-4">
        about
      </a>
      <a href="#projects" className="py-4">
        projects
      </a>
      <a href="#contact" className="py-4">
        contact
      </a>
      <div></div>
      <a
        href="https://github.com/caseyharvey"
        target="_blank"
        rel="noopener noreferrer"
        className="justify-self-end"
      >
        <FaGithub className="w-6 h-6" />
      </a>
    </div>
  )
}

export default Dropdown
