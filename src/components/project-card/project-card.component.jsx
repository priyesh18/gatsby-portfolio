import React from 'react';
import './project-card.styles.scss';

import StarIcon from '../../assets/icons/star.svg';
import ExternalLinkIcon from '../../assets/icons/external-link.svg';
import SocialLinks from '../social-links/social-links.component';

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
               <SocialLinks/> 
                
            </footer>
    </div>
);

export default ProjectCard;