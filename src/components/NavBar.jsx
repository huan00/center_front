import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMehBlank, BiHourglass, BiMenu } from 'react-icons/bi'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { IoIosLogOut } from 'react-icons/io'

const NavBar = ({ handleLogout, user }) => {
  const [hightlightUrl] = useState('hightlight-url')
  const [navigateToSignIn] = useState('/')

  const activeUrl = (url) => {
    if (window.location.href.includes(url)) {
      return hightlightUrl
    } else {
      return ''
    }
  }

  return (
    <div className="navBar">
      <div>
        <h3 className="navBar-title">Center</h3>
      </div>

      <div className="navBar-menu-icon">
        <Link to={user ? `/survey` : navigateToSignIn}>
          <BiMehBlank
            className={`menu-icon BiMehBlank ${activeUrl('survey')}`}
          />
        </Link>
        <Link to={user ? `/activity` : navigateToSignIn}>
          <BiHourglass
            className={`menu-icon BiHourGlass ${activeUrl('activity')}`}
          />
        </Link>
        <Link to={user ? `/chat` : navigateToSignIn}>
          <IoChatbubblesOutline
            className={`menu-icon faComments ${activeUrl('chat')}`}
          />
        </Link>
        <Link to={user ? `/user/setting` : navigateToSignIn}>
          <BiMenu className={`menu-icon BiMenu ${activeUrl('user')}`} />
        </Link>

        <IoIosLogOut
          className={`menu-icon faComments `}
          onClick={handleLogout}
        />
      </div>
    </div>
  )
}

export default NavBar
