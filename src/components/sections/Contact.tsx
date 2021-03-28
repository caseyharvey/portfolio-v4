import React from "react"
import ContactForm from "../ContactForm"
import Heading from "../Heading"
import SectionHeading from "../SectionHeading"

interface Props {}

const About = (props: Props) => {
  return (
    <section id="contact" className="pt-16">
      <SectionHeading heading="Contact" />
      <Heading heading="Email me" tagline="im@casey.work" />
      <ContactForm />
    </section>
  )
}

export default About
