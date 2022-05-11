import { getUserDetails } from '../services/User-service'
import React, { useEffect, useState } from 'react'
import { BiSad } from 'react-icons/bi'

const ActivityDetail = ({ user, id }) => {
  const [activityDetails, setActivityDetails] = useState([])
  const [breathing, setBreathing] = useState([])
  const [month, setMonth] = useState([
    null,
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
  const [reasons, setReasons] = useState([
    null,
    'Breathing',
    'Distraction',
    'Logit'
  ])
  const [monthfilter, setMonthFilter] = useState('')
  const [reasonfilter, setReasonFilter] = useState(id)
  const [title, setTitle] = useState('Your centers')

  useEffect(() => {
    getActivityDetail(user.id)
    getBreathingActivity(activityDetails)
  }, [])

  const getActivityDetail = async (id) => {
    const detail = await getUserDetails(id)
    console.log(detail)
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
    console.log(reasonfilter)
  }

  const render = () => {
    let renderArr = []

    if (monthfilter && reasonfilter) {
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
        className={`render-detail ${
          act.answer !== 'happy' && act.answer !== 'loved' ? 'sad' : 'happy'
        }`}
      >
        <p>Question: {act.question}</p>
        <p>Answer: {act.answer}</p>
        <p>Reason: {act.reason}</p>
        <p>Activity: {act.activity}</p>
        <p>Created: {act.createdAt}</p>
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
              <option value={idx}>{mon}</option>
            ))}
          </select>
          <label htmlFor="">Reason: </label>
          <select onChange={handleChangeReason}>
            {reasons.map((reason) => (
              <option value={reason}>{reason}</option>
            ))}
          </select>
        </form>
        {render()}
      </div>
    </div>
  )
}

export default ActivityDetail
