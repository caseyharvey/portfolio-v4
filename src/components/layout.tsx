import React, { useEffect, useState } from "react"
import Dropdown from "./Dropdown"
import Navbar from "./Navbar"

const Layout: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log("I resized")
      }
    }
    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  })

  return (
    <>
      <main>
        <Navbar toggle={toggle} />
        <Dropdown toggle={toggle} isOpen={isOpen} />
        {children}
      </main>
    </>
  )
}

export default Layout
