import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const About = (props: Props) => {
  return (
    <Layout>
      <SEO title="portfolio" />
      <div className="text-white p-8">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          eligendi in voluptatum nam quo excepturi beatae aut distinctio ipsam
          possimus illo totam molestiae, amet dignissimos autem iusto facere
          odit fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam fugiat ipsam officiis. Corrupti pariatur nisi et distinctio
          excepturi cumque eaque incidunt nostrum molestiae! Possimus sit
          reiciendis dignissimos quisquam, temporibus id?
        </p>
      </div>
    </Layout>
  )
}

export default About
