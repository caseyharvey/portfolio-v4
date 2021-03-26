import React from "react"

interface Props {
  text: string
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-gray-50 text-black w-full rounded p-3 text-xl">
      {text}
    </button>
  )
}

export default Button
