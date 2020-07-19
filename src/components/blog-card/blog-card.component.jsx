import React from 'react';

import './blog-card.styles.scss';
import PlayIcon from '../../assets/icons/quill.svg'
import CustomLink from '../../components/custom-link/custom-link.component';


const BlogCard = () => (
    <div className="blog-card">
        
            <h3 className="blog-name">
                Dinero.js
            </h3>
            <p className="blog-description">
                lajlejfeln fawejf l jkekl nkla e ljawekln a ekn lknlawef klnweklnf klaeklew .
            </p>
            <footer className="card-footer">
            <CustomLink icon={<PlayIcon/>} text="Read More" href="#"/>
                
            </footer>
    </div>
);

export default BlogCard;
