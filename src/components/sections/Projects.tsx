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
        nameOne="The App"
        nameTwo="The Code"
        linkOne="https://timeismoney.casey.work/"
        linkTwo="https://github.com/caseyharvey/time-is-money"
        info="I built this app as a way to keep track of time while I study. We all know how precious time is but we don't always use it for things that matter. This app can help you clarify whats important in your life by giving it a dollar value."
      />
      <Heading heading="UmbleJay" tagline="LanguageConverter" />
      <ProjectCard
        nameOne="The App"
        nameTwo="The Code"
        linkOne="https://umblejay.casey.work/"
        linkTwo="https://github.com/caseyharvey/umblejay"
        info="This is pig latin converter. After seeing many people attempt to program this idea without truly succeeding, I wrote an algorithm to handle the conversion properly. The first attempt was done a while ago and I have since refactored it and turned in into a react app."
      />
    </section>
  )
}

export default About
