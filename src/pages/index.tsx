import React from "react"
import Layout from "../components/layout"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="portfolio" />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
