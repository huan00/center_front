import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbtack,
  faEllipsisVertical,
  faCrown
} from '@fortawesome/free-solid-svg-icons'
import '../styles/component.css'
import profile from '../assets/images/profile.svg'

const ReplyMsg = ({ message, createdAt, username }) => {
  return (
    <div className="infoCard" style={{ height: '200px' }}>
      <div className="infoCard-title">
        <img src={profile} alt="" />
        <h4>
          {username} <FontAwesomeIcon icon={faCrown} />
        </h4>
        <FontAwesomeIcon className="thumbTack" icon={faThumbtack} />
        <FontAwesomeIcon className="ellispsisVert" icon={faEllipsisVertical} />
      </div>
      <div className="infoCard-content " style={{ height: '100px' }}>
        <p>{message}</p>
      </div>
      <hr></hr>
      <div className="infoCard-footer">
        <p>Posted on: {createdAt}</p>
      </div>
    </div>
  )
}

export default ReplyMsg
