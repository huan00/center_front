import React from 'react'
import Activity from '../../components/promptPages/Activity'
import { useNavigate } from 'react-router-dom'

const PromptPageThree = ({ survey, setSurvey, postSurveyResult }) => {
  let navigate = useNavigate()
  const handleActPage = (ans) => {
    setSurvey({ ...survey, activity: ans })
    navigate(`/survey/cause/activity/${ans}`)
  }
  return (
    <div className="container">
      <Activity
        survey={survey}
        setSurvey={setSurvey}
        postSurveyResult={postSurveyResult}
        handleActPage={handleActPage}
        desktop={false}
      />
    </div>
  )
}

export default PromptPageThree
