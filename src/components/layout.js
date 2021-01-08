import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Particles from 'react-particles-js';

import Menu from "./menu.js"

const Layout = ({ location, title, children }) => {
  const rootPath = `/blog`
  const isRootPath = `/blog`
  let header

  if (isRootPath) {
    header = (
      <div>
        <Menu />
      </div>
      
    )
  } else {
    header = (
      <div>
        <Menu />
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      </div>
      
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <p>
          © {new Date().getFullYear()} developed by <Link className="exLink" href="https://twitter.com/johndursodev" target="_blank" rel="noreferrer">@johndursodev</Link>
        </p>
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div className="themeToggle">
                <label for="themeToggler">{' '}Dark mode</label>
                <input
                    type="checkbox"
                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                    name="themeToggler"
                  />
              </div>
            )}
        </ThemeToggler>
        <p className="attribution">Icons made by <a href="https://www.flaticon.com/free-icon/reading_3749934?related_item_id=3749948&term=read" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon"><img style={{width:`50px`, display: `inline-block`}} src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg"></img></a></p>
      </footer>
      <Particles className="balls"
        params={{
          "particles": {
              "number": {
                  "value": 100,
                  "density": {
                      "enable": true,
                      "value_area": 3000
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 0.2
              },
              "move": {
                  "direction": "right",
                  "speed": 0.1
              },
              "size": {
                  "value": 2
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  }
              },
              "modes": {
                  "push": {
                      "particles_nb": 1
                  }
              }
          },
          "retina_detect": true
      }} />
    </div>
  )
}

export default Layout
