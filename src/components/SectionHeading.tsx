import React from "react"

interface Props {
  heading: string
}

const SectionHeading: React.FC<Props> = ({ heading }) => {
  return <div className="p-8 pt-16 text-5xl bg-gray-900">{heading}</div>
}

export default SectionHeading
