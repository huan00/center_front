import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbtack,
  faEllipsisVertical,
  faEye,
  faCrown
} from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import '../styles/component.css'
import profile from '../assets/images/profile.svg'

const InfoCard = ({ mood, message, user, all }) => {
  const [username, setUsername] = useState(user)
  const [filter, setFilter] = useState('')

  console.log(all)

  return (
    <div className="infoCard">
      <div className="infoCard-title">
        <img src={profile} alt="" />
        <h4>
          {username} <FontAwesomeIcon icon={faCrown} />
        </h4>
        <FontAwesomeIcon className="thumbTack" icon={faThumbtack} />
        <FontAwesomeIcon className="ellispsisVert" icon={faEllipsisVertical} />
      </div>
      <div className="infoCard-content">
        <h4>{all.messageMood[0] ? all.messageMood[0].mood : 'General'}</h4>
        <p>{message}</p>
      </div>
      <div className="infoCard-social">
        <FontAwesomeIcon className="faEye" icon={faEye} />
        <span>0</span>
        <FontAwesomeIcon className="faComment" icon={faComment} />
        <span>0</span>
        <span className="spanHeart">0</span>
        <FontAwesomeIcon className="faHeart" icon={faHeart} />
      </div>
      <hr></hr>
      <div className="infoCard-footer">
        <p>Recent Activity:</p>
        <img src={profile} alt="" />
        <p>2h</p>
      </div>
    </div>
  )
}

export default InfoCard
