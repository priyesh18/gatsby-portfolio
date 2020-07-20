import React from "react"
import "./allBlogs.styles.scss"

import BlogCard from "../components/blog-card/blog-card.component"
import BlogData from "../data/blogs.json"

const AllBlogs = () => (
  <div className="all-blogs">
    {BlogData.map(({ id, ...otherProps }) => (
      <BlogCard key={id} {...otherProps} />
    ))}
  </div>
)

export default AllBlogs
