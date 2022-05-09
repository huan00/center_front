import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiMehBlank, BiHourglass, BiMenu } from 'react-icons/bi'
import { IoChatbubblesOutline } from 'react-icons/io5'

const NavBar = ({}) => {
  useEffect(() => {}, [])

  return (
    <div className="navBar">
      <div>
        <h3 className="navBar-title">Center</h3>
      </div>
      {window.location.href.includes('prompt') ? (
        ''
      ) : (
        <div className="navBar-menu-icon">
          <Link to="select">
            <BiMehBlank className="menu-icon BiMehBlank" />
          </Link>
          <BiHourglass className="menu-icon BiHourGlass" />
          <BiMenu className="menu-icon BiMenu" />
          <IoChatbubblesOutline className="menu-icon faComments" />
        </div>
      )}
    </div>
  )
}

export default NavBar
