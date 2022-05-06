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

const InfoCard = () => {
  const [username, setUsername] = useState('username')

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
        <h4>General Discussion</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          alias ad ratione minima, sed deserunt quisquam. Provident vel, optio
          ipsa suscipit sed labore nisi dolorum sapiente saepe sit quod
          minus!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perferendis unde asperiores culpa at recusandae aperiam, corrupti
          praesentium veniam rerum dignissimos nihil aliquam repellendus earum
          quo molestias est ea aliquid porro!
        </p>
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
