import React from 'react'

const SurveyDetail = ({ question, answer, activity, reason, date }) => {
  return (
    <div className={`survey-detail`}>
      <div className="survey-detail-content">
        <p>Question: {question}</p>
        <p>Answer: {answer}</p>
        <p>Activity: {activity}</p>
        <p>Reason: {reason}</p>
        <p>Post date: {date}</p>
      </div>
    </div>
  )
}

export default SurveyDetail
