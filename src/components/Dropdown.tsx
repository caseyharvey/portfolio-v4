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
          ? "grid grid-rows-4 text-center items-center text-white"
          : "hidden"
      }
      // onClick={toggle}
    >
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
  )
}

export default Dropdown
