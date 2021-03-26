import React from "react"

interface Props {
  heading: string
}

const SectionHeading: React.FC<Props> = ({ heading }) => {
  return (
    <div className="m-8 p-4 my-16 text-5xl text-right bg-darkGray">
      {heading}
    </div>
  )
}

export default SectionHeading
