import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../services/User-service'
import { BsArrowRight } from 'react-icons/bs'

const ActivityHistory = ({ user, handleHistoryPage }) => {
  const [activityDetail, setActivityDetail] = useState([])
  const [titles, setTitles] = useState([
    'Breathing',
    'Distraction',
    'Logit',
    ''
  ])

  useEffect(() => {
    if (user) {
      getActivityDetail(user.id)
    }
  }, [])

  const getActivityDetail = async (id) => {
    const detail = await getUserDetails(id)
    setActivityDetail(detail.Surveys)
  }

  return user ? (
    <div className="activity-history container">
      <div className="activity-history-breathing">
        {titles.map((title, idx) => (
          <div onClick={() => handleHistoryPage(title)} key={idx}>
            <p>
              {title === ''
                ? activityDetail.length
                : activityDetail.filter((act) => act.activity === title).length}
            </p>
            <div className="activity-history-link">
              <h1>{title ? title : 'All'}</h1>
              <BsArrowRight className="activity-arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="container">Loading</div>
  )
}

export default ActivityHistory
