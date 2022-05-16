import { getUserDetails } from '../services/User-service'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ActivityDetail = ({ user, id, handleSelectLog, handleSelfMessage }) => {
  const [activityDetails, setActivityDetails] = useState([])
  const [breathing, setBreathing] = useState([])

  const [month] = useState([
    'All',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ])
  const [reasons] = useState(['All', 'Breathing', 'Distraction', 'Logit'])
  const [monthfilter, setMonthFilter] = useState(0)
  const [reasonfilter, setReasonFilter] = useState(id)
  const [title] = useState('Your centers')
  const navigate = useNavigate()

  useEffect(() => {
    getActivityDetail(user.id)
    getBreathingActivity(activityDetails)
  }, [])

  const getActivityDetail = async (id) => {
    const detail = await getUserDetails(id)
    setActivityDetails(detail.Surveys)
  }
  const getBreathingActivity = (activityDetails) => {
    setBreathing(activityDetails.filter((act) => act.activity === 'Breathing'))
  }

  const handleChangeMonth = (e) => {
    setMonthFilter(parseInt(e.target.value))
  }
  const handleChangeReason = (e) => {
    setReasonFilter(e.target.value)
  }

  const render = () => {
    let renderArr = []

    if (monthfilter === 0 && reasonfilter === 'All') {
      renderArr = [...activityDetails]
    } else if (monthfilter && reasonfilter) {
      renderArr = activityDetails
        .filter((act) => act.activity === reasonfilter)
        .filter((mon) => parseInt(mon.createdAt.split('-')[1]) === monthfilter)
    } else if (monthfilter) {
      renderArr = activityDetails.filter(
        (act) => parseInt(act.createdAt.split('-')[1]) === monthfilter
      )
    } else if (reasonfilter) {
      renderArr = activityDetails.filter((act) => act.activity === reasonfilter)
    } else {
      renderArr = [...activityDetails]
    }

    return renderArr.map((act) => (
      <div
        key={act.id}
        className={`render-detail ${
          act.answer !== 'happy' && act.answer !== 'loved'
            ? act.answer !== 'sad' && act.answer !== 'angry'
              ? 'normal'
              : 'sad'
            : 'happy'
        }`}
      >
        <p onClick={() => handleSelectLog(act.id)}>
          {new Date(act.createdAt).toDateString()}
        </p>
      </div>
    ))
  }

  return (
    <div className="container activity-detail-comp">
      <div>
        <h1>{title}</h1>
      </div>
      <div className="activity-detail-list">
        <form action="">
          <label htmlFor="">Month: </label>
          <select onChange={handleChangeMonth}>
            {month.map((mon, idx) => (
              <option key={idx} value={idx}>
                {mon}
              </option>
            ))}
          </select>
          <label htmlFor="">Reason: </label>
          <select onChange={handleChangeReason}>
            {reasons.map((reason, idx) => (
              <option key={idx} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </form>
        <div>{render()}</div>

        {reasonfilter === 'Logit' &&
          (handleSelfMessage ? (
            <div>
              <button className="btn" onClick={handleSelfMessage}>
                Self Message
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn"
                onClick={() => {
                  navigate('selfmessage')
                }}
              >
                Self Message
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ActivityDetail
