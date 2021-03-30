import React from "react"
import projectsArray from "./projectsArray"
import ProjectCard from "./ProjectCard"

const ProjectList: React.FC = () => {
  return (
    <>
      {projectsArray.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          tagline={project.tagline}
          linkOne={project.url}
          linkTwo={project.git}
          info={project.info}
        ></ProjectCard>
      ))}
    </>
  )
}

export default ProjectList
