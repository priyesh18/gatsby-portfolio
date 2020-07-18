import React from 'react';
import './allProjects.styles.css';
import ProjectCard from '../components/project-card/project-card.component';

const AllProjects = () => (
    <div className="all-projects">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
);

export default AllProjects;