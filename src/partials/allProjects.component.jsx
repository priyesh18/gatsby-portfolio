import React from "react"
import "./allProjects.styles.scss"
import ProjectCard from "../components/project-card/project-card.component"

import ProjectData from "../data/projects.json"
import { graphql, useStaticQuery } from "gatsby"

const AllProjects = () => {
  // const gatsbyRepoData = useStaticQuery(graphql`
  //   query {
  //     github {
        
  //         id
  //         nameWithOwner
  //         url
        
  //     }
  //   }
  // `)

  return (
    
    <div className="all-projects">
    {/* {console.log(gatsbyRepoData)} */}
    {ProjectData.map((project) => (
          <ProjectCard 
            key={project.id} 
            {...project}
            
          />
        ))}
  </div>
  )
}

export default AllProjects
