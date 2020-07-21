import React from "react"
import "./project-card.styles.scss"

import GithubIcon from "../../assets/icons/github.svg"
import CustomLink from "../../components/custom-link/custom-link.component"

class ProjectCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollPosition: 0,
      shouldParallax: false,
      ticking: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener("resize", this.onResize)
    this.onResize()
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize)
    window.removeEventListener("scroll", this.onScroll)
  }
  onResize = () => {
    this.setState({ shouldParallax: window.innerWidth > 992 ? true : false })
  }
  onScroll = () => {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        // I am mutating!
        this.setState({ scrollPosition: parseInt(window.scrollY) })
        this.ticking = false
      })

      this.ticking = true
    }
  }
  render() {
    const {
      index,
      language,
      name,
      description,
      html_url,
      homepage,
    } = this.props
    return (
      <div
        className="project-card"
        style={
          index % 2 === 0 && this.state.shouldParallax
            ? {
                transform: `translateY(-${this.state.scrollPosition * 0.05}px)`,
              }
            : {}
        }
      >
        <p className="project-language">{language}</p>
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
        <footer className="card-footer">
          <ul>
            <li>
              <CustomLink icon={<GithubIcon />} text="Github" href={html_url} />
            </li>

            <li>
              {homepage ? (
                <CustomLink icon={<div />} text="View" href={homepage} />
              ) : (
                ""
              )}
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default ProjectCard
