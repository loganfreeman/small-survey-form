/* eslint-disable object-curly-newline */

import React from 'react'
import { Bars, Nav, NavLink, NavMenu } from './NavbarElements'

function Navbar() {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">profile</NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Navbar
