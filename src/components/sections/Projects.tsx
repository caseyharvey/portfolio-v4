import React from "react"
import Heading from "../Heading"
import ProjectCard from "../ProjectCard"
import SectionHeading from "../SectionHeading"

const About = () => {
  return (
    <section id="projects" className="pt-16">
      <SectionHeading heading="Projects" />
      <Heading heading="TimeIsMoney" tagline="DollarValueTimer" />
      <ProjectCard
        linkOne="The App"
        linkTwo="The Code"
        info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          consectetur vitae quae libero iure molestias pariatur repellat,
          cupiditate voluptatum aperiam atque dolores at, minus facere voluptas
          officiis maxime hic cumque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptates necessitatibus rerum ex, enim tenetur
          ipsa, voluptatibus doloribus, consectetur dolor commodi alias?
          Doloremque fuga officiis qui eos non aliquam sint ipsam?"
      />
      <Heading heading="UmbleJay" tagline="LanguageConverter" />
      <ProjectCard
        linkOne="The App"
        linkTwo="The Code"
        info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          consectetur vitae quae libero iure molestias pariatur repellat,
          cupiditate voluptatum aperiam atque dolores at, minus facere voluptas
          officiis maxime hic cumque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptates necessitatibus rerum ex, enim tenetur
          ipsa, voluptatibus doloribus, consectetur dolor commodi alias?
          Doloremque fuga officiis qui eos non aliquam sint ipsam?"
      />
    </section>
  )
}

export default About
