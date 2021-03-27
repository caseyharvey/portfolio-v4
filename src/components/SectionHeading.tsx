import React from "react"

interface Props {
  heading: string
}

const SectionHeading: React.FC<Props> = ({ heading }) => {
  return (
    <div className="m-8 p-4 pb-0 pr-0 my-16 border-b-2 text-5xl text-right dark:border-b-white border-gray-700 dark:border-gray-300">
      {heading}
    </div>
  )
}

export default SectionHeading
