import React from "react"

import "./custom-link.styles.scss"
import ExternalLinkIcon from "../../assets/icons/external-link.svg"

const CustomLink = ({ icon, text, href }) => (
  <div className="custom-link">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="icon">{icon}</div>
      <span className="title">{text}</span>
      <div className="icon">
        <ExternalLinkIcon />
      </div>
    </a>
  </div>
)

export default CustomLink
