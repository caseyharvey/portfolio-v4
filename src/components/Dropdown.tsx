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
          ? "grid grid-rows-4 text-center items-center text-white mt-16 fixed w-full bg-black"
          : "hidden"
      }
      onClick={toggle}
    >
      <a href="#about" className="p-4">
        about
      </a>
      <a href="#projects" className="p-4">
        projects
      </a>
      <a href="#contact" className="p-4">
        contact
      </a>
    </div>
  )
}

export default Dropdown
