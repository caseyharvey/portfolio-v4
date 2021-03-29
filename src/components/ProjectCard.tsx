import React from "react"
import Button from "./Button"

interface Props {
  nameOne: string
  nameTwo: string
  linkOne: string
  linkTwo: string
  info: string
}

const ProjectCard: React.FC<Props> = ({
  nameOne,
  nameTwo,
  linkOne,
  linkTwo,
  info,
}) => {
  return (
    <div className="px-4 sm:px-8">
      <div className="flex justify-between ">
        <Button link={linkOne} text={nameOne} />
        <div className="px-2"></div>
        <Button link={linkTwo} text={nameTwo} />
      </div>

      <div className="mt-6 mb-8">
        <p>{info}</p>
      </div>
    </div>
  )
}

export default ProjectCard
