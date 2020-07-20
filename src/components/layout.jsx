/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Nav from "../components/nav/nav.component"
import CustomLink from "../components/custom-link/custom-link.component"
import ThemeToggle from "../components/theme-toggle/theme-toggle.component"

import GithubIcon from "../assets/icons/github.svg"
import TwitterIcon from "../assets/icons/twitter.svg"
// import headshot from "../assets/images/male_avatar.png"
import PersonalData from "../data/personal.json"
import "./layout.scss"

const Layout = ({ children }) => {
  /* <Header siteTitle={data.site.siteMetadata.title} isVisible="false" /> */

  return (
    // <>
    <div>
      <div className="layout">
        {/* <TopBar isVisible="false"/> */}
        <div className="intro-box">
          <div className="intro-text">
            <div>
              <h1 className="intro-title">{PersonalData.title}</h1>
            </div>
            <div className="intro-desc">
              <p className="desc-content">
                {PersonalData.intro}
                <a
                  href={PersonalData.blog_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PersonalData.blog_name}
                </a>
              </p>
            </div>
          </div>
          <Nav />
          <div className="intro-misc">
            <div className="headshot">
              <ThemeToggle />
            </div>

            {/* <img className="headshot" src={headshot} alt={PersonalData.name} /> */}
            <div className="social-links">
              <ul>
                <li>
                  <CustomLink
                    icon={<GithubIcon />}
                    text="Github"
                    href={PersonalData.github_url}
                  />
                </li>
                <li>
                  <CustomLink
                    icon={<TwitterIcon />}
                    text="Twitter"
                    href={PersonalData.twitter_url}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-box">{children}</div>
      </div>
    </div>
    // </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
