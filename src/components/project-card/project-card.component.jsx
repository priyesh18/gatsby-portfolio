import React from 'react';
import './project-card.styles.scss';

import StarIcon from '../../assets/icons/star.svg';
import GithubIcon from '../../assets/icons/github.svg'
import PlayIcon from '../../assets/icons/quill.svg'
import CustomLink from '../../components/custom-link/custom-link.component';

const ProjectCard = ({language, name, description, html_url}) => (
    <div className="project-card">
       
            <p className="project-language">
                {language}
            </p>
            <h3 className="project-name">
                {name}
            </h3>
            <p className="project-description">
                {description}
            </p>
            <footer className="card-footer">
            <ul>
            <li>
                
        <CustomLink icon={<GithubIcon/>} text="Github" href={html_url}/>
            </li>

            {/* <li>
            <CustomLink icon={<PlayIcon/>} text="View" href="#"/>

            </li> */}
        </ul> 
                
            </footer>
    </div>
);

export default ProjectCard;