import React from "react"

import "./blog-card.styles.scss"
import MediumIcon from "../../assets/icons/medium.svg"
import CustomLink from "../../components/custom-link/custom-link.component"

const BlogCard = ({ title, text, link }) => (
  <div className="blog-card">
    <h3 className="blog-name">{title}</h3>
    <p className="blog-description">{text}</p>
    <footer className="card-footer">
      <CustomLink icon={<MediumIcon />} text="Read More" href={link} />
    </footer>
  </div>
)

export default BlogCard
