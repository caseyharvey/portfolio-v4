import React from "react"

interface Props {
  heading: string
}

const SectionHeading: React.FC<Props> = ({ heading }) => {
  return (
    <div className="m-8 p-4 pb-0 pr-0 my-16 border-b-2 text-5xl text-right border-b-darkGray">
      {heading}
    </div>
  )
}

export default SectionHeading
