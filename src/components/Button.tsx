import React from "react"

interface Props {
  text: string
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="bg-darkGray text-white border-2 border-gray-600 w-full rounded p-3 text-xl hover:bg-gray-900 hover:border-gray-700 hover:text-yellow-500 md:py-5">
      {text}
    </button>
  )
}

export default Button
