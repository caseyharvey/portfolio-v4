import React from "react"
import Button from "./Button"
import Heading from "./Heading"

interface Props {
  id?: number
  key?: number
  name: string
  tagline: string
  linkOne: string
  linkTwo: string
  info: string
}

const ProjectCard: React.FC<Props> = ({
  name,
  tagline,
  linkOne,
  linkTwo,
  info,
}) => {
  return (
    <div>
      <Heading heading={name} tagline={tagline} />
      <div className="px-4 sm:px-8">
        <div className="flex justify-between ">
          <Button link={linkOne} text="The App" />
          <div className="px-2"></div>
          <Button link={linkTwo} text="The Code" />
        </div>
        <div className="mt-6 mb-8">
          <p>{info}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
