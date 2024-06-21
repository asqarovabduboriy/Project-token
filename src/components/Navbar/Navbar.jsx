import React from 'react'

import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container flex">
          <h1>LOGO</h1>
          <nav>
            <ul>
              <NavLink to="/">User</NavLink>
              <NavLink to="/register">register</NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar