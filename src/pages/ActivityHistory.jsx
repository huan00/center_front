import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../services/User-service'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ActivityHistory = ({ user, checkToken }) => {
  const [activityDetail, setActivityDetail] = useState([])

  useEffect(() => {
    getActivityDetail(user.id)
  }, [])

  const getActivityDetail = async (id) => {
    const detail = await getUserDetails(id)
    console.log(detail)
    setActivityDetail(detail)
  }

  return (
    <div className="activity-history container">
      <div className="activity-history-breathing">
        <p>
          {activityDetail.filter((act) => act.activity === 'Breathing').length}
        </p>
        <Link to={`history/Breathing`}>
          <div className="activity-history-link">
            <h1>Breathing</h1>
            <BsArrowRight className="activity-arrow" />
          </div>
        </Link>
      </div>
      <div className="activity-history-distraction">
        <p>
          {
            activityDetail.filter((act) => act.activity === 'Distraction')
              .length
          }
        </p>
        <Link to={`history/Distraction`}>
          <div className="activity-history-link">
            <h1>Distraction</h1>
            <BsArrowRight className="activity-arrow" />
          </div>
        </Link>
      </div>
      <div className="activity-history-logit">
        <p>{activityDetail.filter((act) => act.activity === 'Logit').length}</p>
        <Link to={`history/LogIt`}>
          <div className="activity-history-link">
            <h1>Logs</h1>
            <BsArrowRight className="activity-arrow" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ActivityHistory
