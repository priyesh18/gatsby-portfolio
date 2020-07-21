import React from "react"

import "./nav.styles.scss"
import { Link } from "react-scroll"

const Nav = () => (
  <nav className="navbar">
    <ul className="links">
      <li className="link-item">
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          <span className="number">01</span>
          <span className="line-spacer"></span>
          <span className="text">Projects</span>
        </Link>
      </li>
      <li className="link-item">
        <Link
          activeClass="active"
          to="blogs"
          spy={true}
          smooth={true}
          duration={500}
        >
          <span className="number">02</span>
          <span className="line-spacer"></span>
          <span className="text">Blogs</span>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
