/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import TopBar from '../partials/top-bar.component';
import Nav from '../components/nav/nav.component';
import SocialLinks from '../components/social-links/social-links.component'
import headshot from '../assets/images/gatsby-icon.png';
// import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  
  /* <Header siteTitle={data.site.siteMetadata.title} isVisible="false" /> */

  return (
    // <>
    <div>

      <div className="layout">
        <TopBar isVisible="false"/>
        <div className="intro-box">
          <div className="intro-text">
            <div>
              <h1 className="intro-title">
                Hello, I'm Priyesh Patel.
              </h1>
            </div>
            <div className="intro-desc">
              <p className="desc-content">
                I'm a Computer Science graduate student at University of Buffalo. 
                I like doing full-stack development and currently learning React.js.
                I also share what I learn on my blog at 
                <a href="http://" target="_blank" rel="noopener noreferrer"> Medium.com</a> 
              </p>
            </div>
            <Nav />
          </div>
          <div className="intro-misc">
            <img className="headshot" src={headshot} alt="Priyesh Patel"/>
            <SocialLinks/>
          </div>
        </div>
        <div className="details-box">
      {children}

        </div>
    </div>
       
      </div>
    // </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
