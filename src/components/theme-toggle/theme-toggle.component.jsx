import React from "react"

import "./theme-toggle.styles.scss"

import MoonIcon from "../../assets/icons/moon.svg"
import SunIcon from "../../assets/icons/sun.svg"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const ThemeToggle = () => (
  <div>
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className="toggle-button">
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          {theme === "dark" ? (
            <SunIcon className="icon" />
          ) : (
            <MoonIcon className="icon" />
          )}
        </label>
      )}
    </ThemeToggler>
  </div>
)

export default ThemeToggle
