import React from "react"
import "./allProjects.styles.scss"
import ProjectCard from "../components/project-card/project-card.component"

import ProjectData from "../data/projects.json"

const AllProjects = () => (
  <div className="all-projects">
    {ProjectData.map(({ id, ...otherProps }) => (
      <ProjectCard key={id} {...otherProps} />
    ))}
  </div>
)

export default AllProjects
