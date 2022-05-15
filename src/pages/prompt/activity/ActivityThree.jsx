import React from 'react'
import LogIt from '../../../components/promptPages/Activity/LogIt'
const ActivityThree = ({ user, postSurveyResult }) => {
  return (
    <div className="container">
      <LogIt user={user} postSurveyResult={postSurveyResult} />
    </div>
  )
}

export default ActivityThree
