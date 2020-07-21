import React from "react"
import "./allProjects.styles.scss"
import ProjectCard from "../components/project-card/project-card.component"

import ProjectData from "../data/projects.json"
import { graphql, useStaticQuery } from "gatsby"

const AllProjects = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      allProject {
        nodes {
          id
          name
          description
          html_url
          language
          homepage
        }
      }
    }
  `)
  const selectedProjects = gatsbyRepoData.allProject.nodes.filter(project =>
    ProjectData.project_names.find(name => name === project.name)
  )

  return (
    <div className="all-projects">
      {selectedProjects.map((project, index) => (
        <ProjectCard key={project.id} index={index} {...project} />
      ))}
    </div>
  )
}

export default AllProjects
