import React from 'react'
import Distraction from '../../../components/promptPages/Activity/Distraction'
import { useNavigate } from 'react-router-dom'

const ActivityTwo = ({ postSurveyResult, setSurvey, survey }) => {
  const navigate = useNavigate()
  const handleDistraction = () => {
    navigate('/activity')
  }
  return (
    <div className="container">
      <Distraction
        postSurveyResult={postSurveyResult}
        setSurvey={setSurvey}
        survey={survey}
        handleDistraction={handleDistraction}
      />
    </div>
  )
}

export default ActivityTwo
