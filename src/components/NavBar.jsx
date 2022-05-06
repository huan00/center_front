import React from 'react'
import { FaUser } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="navBar">
      <h3 className="navBar-title">Center</h3>
      <hr></hr>
      <FaUser className="navBar-user" />
      <ul className="navBar-list">
        <li>Home</li>
        <li>Profile</li>
        <li>Forum</li>
        <li>About Us</li>
      </ul>
    </div>
  )
}

export default NavBar