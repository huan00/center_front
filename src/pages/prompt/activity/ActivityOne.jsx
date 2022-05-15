import React from 'react'
import Breathing from '../../../components/promptPages/Activity/Breathing'

const ActivityOne = ({ postSurveyResult }) => {
  return (
    <div className="container">
      <Breathing postSurveyResult={postSurveyResult} />
    </div>
  )
}

export default ActivityOne
