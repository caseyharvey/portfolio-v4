import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main className="container w-100vw h-100vh bg-red">{children}</main>
    </>
  )
}

export default Layout
