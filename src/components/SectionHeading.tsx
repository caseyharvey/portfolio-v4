import React from "react"

interface Props {
  heading: string
}

const SectionHeading: React.FC<Props> = ({ heading }) => {
  return (
    <div className="font-mono font-black m-8 p-4 mt-16 text-7xl text-right bg-darkGray">
      {heading}
    </div>
  )
}

export default SectionHeading
