import React from "react"

interface Props {
  text: string
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="dark:bg-darkGray dark:text-white border-2 bg-gray-200 dark:border-gray-600 w-full rounded p-3 text-xl dark:hover:bg-gray-900 hover:bg-gray-100 border-gray-400 hover:border-gray-300 hover:text-gray-600 dark:hover:border-gray-700 dark:hover:text-yellow-500 md:py-5">
      {text}
    </button>
  )
}

export default Button
