import React from "react"
import { Link } from "gatsby"

interface Props {
  toggle: () => void
  isOpen: boolean
}

const Dropdown: React.FC<Props> = ({ toggle, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-5 p-8 mt-16 text-right items-center text-white fixed w-full bg-black text-xl"
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
    </div>
  )
}

export default Dropdown
