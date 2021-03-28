import React from "react"
import Heading from "../Heading"
import SectionHeading from "../SectionHeading"

interface Props {}

const About = (props: Props) => {
  return (
    <section id="contact" className="pt-16">
      <SectionHeading heading="Contact" />
      <Heading heading="Email me" tagline="im@casey.work" />
      <div className="py-8 px-4 sm:px-8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
          accusamus! Cum iste, hic amet debitis unde iusto vitae possimus
          nesciunt neque, assumenda blanditiis, repellat maxime! Est illum
          aperiam eaque mollitia?
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam unde aut
          voluptatibus temporibus magni, eligendi impedit, quas distinctio, a
          quos porro ad nobis asperiores aliquam quaerat. Officia sapiente modi
          odio.
        </p>
      </div>
    </section>
  )
}

export default About
