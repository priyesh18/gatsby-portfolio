import React from 'react';
import './allBlogs.styles.css';

import BlogCard from '../components/blog-card/blog-card.component';

const AllBlogs = () => (
    <div className="all-blogs">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </div>
);

export default AllBlogs;