import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMehBlank,
  faHourglass,
  faComments
} from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <h3 className="navBar-title">Center</h3>
      </div>
      <div className="navBar-menu-icon">
        <FontAwesomeIcon className="menu-icon faMehBlank" icon={faMehBlank} />
        <FontAwesomeIcon className="menu-icon faHourGlass" icon={faHourglass} />
        <FontAwesomeIcon className="menu-icon faBars" icon={faBars} />
        <FontAwesomeIcon className="menu-icon faComments" icon={faComments} />
      </div>
    </div>
  )
}

export default NavBar
