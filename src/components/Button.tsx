import React from "react"

interface Props {
  text: string
  link?: string
}

const Button: React.FC<Props> = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
      {text}
    </a>
  )
}

export default Button
