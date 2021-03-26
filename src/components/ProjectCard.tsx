import React from "react"
import Button from "./Button"

interface Props {
  linkOne: string
  linkTwo: string
  info: string
}

const ProjectCard: React.FC<Props> = ({ linkOne, linkTwo, info }) => {
  return (
    <div className="px-8">
      <div className="flex justify-between ">
        <Button text={linkOne} />
        <div className="px-2"></div>
        <Button text={linkTwo} />
      </div>

      <div className="mt-6 mb-8">
        <p>{info}</p>
      </div>
    </div>
  )
}

export default ProjectCard
