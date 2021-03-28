import React from "react"

interface Props {
  heading: string
  tagline?: string
}

const Heading: React.FC<Props> = ({ heading, tagline }) => {
  return (
    <div className="px-4 sm:px-8 py-8">
      <div className="text-4xl">{heading}</div>
      <div className="text-lg">{tagline}</div>
    </div>
  )
}

export default Heading
