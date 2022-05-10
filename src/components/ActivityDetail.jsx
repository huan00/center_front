import { getUserDetails } from '../services/User-service'
import React, { useEffect, useState } from 'react'

const ActivityDetail = ({ user }) => {
  const [activityDetails, setActivityDetails] = useState([])
  const [breathing, setBreathing] = useState([])
  const [month, setMonth] = useState([
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
  const [reasons, setReasons] = useState(['Breathing', 'Distraction', 'LogIt'])
  const [monthfilter, setMonthFilter] = useState('')
  const [reasonfilter, setReasonFilter] = useState('')
  const [title, setTitle] = useState('Your centers')

  useEffect(() => {
    getActivityDetail(user.id)
    getBreathingActivity(activityDetails)
  }, [])

  const getActivityDetail = async (id) => {
    const detail = await getUserDetails(id)
    console.log(detail)
    setActivityDetails(detail)
  }
  const getBreathingActivity = (activityDetails) => {
    setBreathing(activityDetails.filter((act) => act.activity === 'Breathing'))
  }

  const handleChangeMonth = (e) => {
    setMonthFilter(parseInt(e.target.value) + 1)
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
      <div className="render-detail">
        <p>Question: {act.question}</p>
        <p>Answer: {act.answer}</p>
        <p>Reason: {act.reason}</p>
        <p>Created: {act.createdAt}</p>
      </div>
    ))
  }

  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <form action="">
          <select onChange={handleChangeMonth}>
            {month.map((mon, idx) => (
              <option value={idx}>{mon}</option>
            ))}
          </select>
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
