import React from 'react';

import './blog-card.styles.scss';
import SocialLinks from '../social-links/social-links.component';

const BlogCard = () => (
    <div className="blog-card">
        
            <h3 className="blog-name">
                Dinero.js
            </h3>
            <p className="blog-description">
                lajlejfeln fawejf l jkekl nkla e ljawekln a ekn lknlawef klnweklnf klaeklew .
            </p>
            <footer className="card-footer">
               <SocialLinks/> 
                
            </footer>
    </div>
);

export default BlogCard;
