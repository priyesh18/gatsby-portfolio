import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"

import AllProjects from "../partials/allProjects.component"
import AllBlogs from "../partials/allBlogs.component"

const IndexPage = () => (
  <Layout>
    <SEO title="Priyesh Patel" />
    <div id="projects" className="projects-container">
      <h2 className="section-title">Projects</h2>

      <AllProjects />
    </div>
    <div id="blogs" className="blogs-container">
      <h2 className="section-title">Blogs</h2>

      <AllBlogs />
    </div>
    <p className="designer">
      Designed by&nbsp;
      <a
        href="https://dribbble.com/NicolasMzrd"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nicolas Meuzard
      </a>
      .
    </p>
  </Layout>
)

export default IndexPage
