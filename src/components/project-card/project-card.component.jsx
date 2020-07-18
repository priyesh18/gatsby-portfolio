import React from 'react';
import './project-card.styles.scss';

import StarIcon from '../../assets/icons/star.svg';

const ProjectCard = ({language, name, description, count}) => (
    <div className="project-card">
        <a className="card" href="http://" target="_blank" rel="noopener noreferrer">
            <p className="project-language">
                javascript
            </p>
            <h3 className="project-name">
                Dinero.js
            </h3>
            <p className="project-description">
                lajlejfeln fawejf l jkekl nkla e ljawekln a ekn lknlawef klnweklnf klaeklew .
            </p>
            <div className="card-footer">
                <div className="icon">
                    <StarIcon/>
                </div>
                <span className="star-count">
                    12
                </span>
            </div>
        </a>
    </div>
);

export default ProjectCard;