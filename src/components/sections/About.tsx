import React from "react"
import Heading from "../Heading"

interface Props {}

const About = (props: Props) => {
  return (
    <section id="about" className="text-white w-full">
      <Heading heading="about me" tagline="casey harvey" />
      <div className="p-8">
        <p>
          I love developing software and writing code. The whole process is
          deeply satisfying and never ending. There is always something new to
          learn, some improvement to be made and something just out of reach. I
          get rush from solving problems and leveling up my skills. This keeps
          me motivated and inspired to push through the inevitable challenges
          along the way.
        </p>
        <br />
        <p>
          Writing code and seeing it come to life is extremely rewarding. The
          reward comes from the fact that doing it well is not easy. It takes
          time, dedication and passion. I am hooked on the process and not the
          end result. I focus on having solid habits that improve with every win
          and every loss. these habits ensure that I always deliver my best.
        </p>
        <br />
        <p>
          Thanks to the internet and all the amazing people producing valuable
          content I have taught myself how to code. Since making the decision to
          learn a programming language my life has been forever changed and I
          could not imagine myself doing anything else.
        </p>
      </div>
    </section>
  )
}

export default About
