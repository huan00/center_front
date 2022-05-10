import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiMehBlank, BiHourglass, BiMenu } from 'react-icons/bi'
import { IoChatbubblesOutline } from 'react-icons/io5'

const NavBar = ({}) => {
  const [active, setActive] = useState(window.location.href)
  const [hightlight, setHighlight] = useState('active')
  useEffect(() => {}, [])

  const hightlightNav = () => {
    if (active.includes('select')) {
    }
  }

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
            <BiMehBlank className={`menu-icon BiMehBlank ${hightlight}`} />
          </Link>
          <Link to="">
            <BiHourglass className="menu-icon BiHourGlass" />
          </Link>
          <BiMenu className="menu-icon BiMenu" />
          <IoChatbubblesOutline className="menu-icon faComments" />
        </div>
      )}
    </div>
  )
}

export default NavBar
