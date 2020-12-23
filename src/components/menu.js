import { Link } from 'gatsby'
import React from 'react'

import './menu.scss';


const Menu = () => {
  return (
    <div>
      <input id="main-menu-checkbox" type="checkbox" />

      <nav className="navigation">
        <label for="main-menu-checkbox" className="menu-toggle">
          <span className="sr-only">Open main menu</span>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
        </label>
        
        <div id="main-menu" role="navigation" className="main-menu" ariaExpanded="false" ariaLabel="Main menu">
          <label for="main-menu-checkbox" class="menu-close">
            <span className="sr-only">Close main menu</span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
          </label>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog" >Blog</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menu