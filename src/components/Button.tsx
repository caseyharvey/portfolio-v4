import React from "react"

interface Props {
  text: string
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-darkGray text-white border-2 border-gray-600 w-full rounded p-3 text-xl">
      {text}
    </button>
  )
}

export default Button
