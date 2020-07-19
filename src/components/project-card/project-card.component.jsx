import React from 'react';
import './project-card.styles.scss';

import StarIcon from '../../assets/icons/star.svg';
import GithubIcon from '../../assets/icons/github.svg'
import PlayIcon from '../../assets/icons/quill.svg'
import CustomLink from '../../components/custom-link/custom-link.component';

const ProjectCard = ({language, name, description, count}) => (
    <div className="project-card">
       
            <p className="project-language">
                javascript
            </p>
            <h3 className="project-name">
                Dinero.js
            </h3>
            <p className="project-description">
                lajlejfeln fawejf l jkekl nkla e ljawekln a ekn lknlawef klnweklnf klaeklew .
            </p>
            <footer className="card-footer">
            <ul>
            <li>
                
        <CustomLink icon={<GithubIcon/>} text="Github" href="#"/>
            </li>

            <li>
            <CustomLink icon={<PlayIcon/>} text="View" href="#"/>

            </li>
        </ul> 
                
            </footer>
    </div>
);

export default ProjectCard;