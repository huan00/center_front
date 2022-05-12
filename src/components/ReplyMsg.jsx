import { useState } from 'react'
import { BsSuitHeart } from 'react-icons/bs'
import {
  faThumbtack,
  faEllipsisVertical,
  faCrown
} from '@fortawesome/free-solid-svg-icons'
import '../styles/component.css'
import profile from '../assets/images/profile.svg'

const ReplyMsg = ({ message, createdAt, username }) => {
  return (
    <div className="reply-card">
      <div className="reply-card-content">
        <div className="reply-card-title">{username}</div>
        <div className="reply-card-message">
          <p>{message}</p>
        </div>

        <div className="reply-card-misc">
          <div className="reply-date">
            <p>{createdAt}</p>
          </div>
          <div className="reply-card-social">
            <span className="spanHeart">0</span>
            <BsSuitHeart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReplyMsg
