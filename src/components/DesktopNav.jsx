import React from 'react'
import { VscGear } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

export const DesktopNav = ({ user, handleLogout }) => {
  return (
    <div className="desktop-navbar">
      <Link to={user ? `/dashboard` : '/'}>
        <p className="desktop-title">Center</p>
      </Link>
      <div className="desktop-nav-setting">
        <Link to={user ? `/user/setting` : '/'}>
          <VscGear className="desktop-gear" />
        </Link>

        <Link to={'/'}>
          <button className="desktop-logout" onClick={handleLogout}>
            Log out
          </button>
        </Link>
      </div>
    </div>
  )
}
