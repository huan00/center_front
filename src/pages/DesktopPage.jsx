import React, { useState } from 'react'
import Activity from '../components/promptPages/Activity'
import Cause from '../components/promptPages/Cause'
import Survey from '../components/promptPages/Survey'
import ActivityHistoryDetail from './activitydetail/ActivityHistoryDetail'
import ActivityHistory from './ActivityHistory'
import ChatHome from './chat/ChatHome'
import Breathing from '../components/promptPages/Activity/Breathing'
import Distraction from '../components/promptPages/Activity/Distraction'
import LogIt from '../components/promptPages/Activity/LogIt'

const DesktopPage = ({
  handleSlider,
  slider,
  mood,
  moodEmoji,
  handleSurvey,
  user,
  survey,
  setSurvey,
  postSurveyResult
}) => {
  const [pageCount, setPageCount] = useState(1)
  const [actPage, setActPage] = useState(1)

  const handleConfirmMood = () => {
    setSurvey({ ...survey, answer: mood[slider].mood, moodId: slider })
    console.log(2)
    setPageCount(pageCount + 1)
  }

  const handleCause = (ans) => {
    setSurvey({ ...survey, reason: ans })
    setPageCount(pageCount + 1)
  }

  const handleActPage = (ans) => {
    setSurvey({ ...survey, activity: ans })
    if (ans === 'Not right now') {
      setPageCount(1)
    } else {
      setPageCount(ans)
    }
  }

  const handleDistraction = () => {
    setPageCount(1)
  }

  const renderSurvey = () => {
    switch (pageCount) {
      case 1:
        return (
          <Survey
            handleSurvey={handleSurvey}
            handleSlider={handleSlider}
            slider={slider}
            user={user}
            moodEmoji={moodEmoji}
            mood={mood}
            handleConfirmMood={handleConfirmMood}
          />
        )

      case 2:
        return (
          <Cause
            handleSlider={handleSlider}
            setSurvey={setSurvey}
            survey={survey}
            handleCause={handleCause}
          />
        )
      case 3:
        return (
          <Activity
            handleSlider={handleSlider}
            survey={survey}
            setSurvey={setSurvey}
            postSurveyResult={postSurveyResult}
            handleActPage={handleActPage}
            pageCount={pageCount}
            desktop={true}
          />
        )

      case 'Breathing':
        return (
          <Breathing
            handleActPage={handleActPage}
            postSurveyResult={postSurveyResult}
            survey={survey}
            setSurvey={setSurvey}
          />
        )
      case 'Distraction':
        return (
          <Distraction
            postSurveyResult={postSurveyResult}
            setSurvey={setSurvey}
            survey={survey}
            handleDistraction={handleDistraction}
          />
        )

      case 'Logit':
        return <LogIt user={user} postSurveyResult={postSurveyResult} />
    }
  }
  const renderActivity = () => {
    switch (actPage) {
      case 1:
        return (
          <Breathing
            handleActPage={handleActPage}
            postSurveyResult={postSurveyResult}
            survey={survey}
            setSurvey={setSurvey}
          />
        )
        break

      default:
        break
    }
  }

  return (
    <div className="desktop">
      <div className="desktop-slider">
        {renderSurvey()}
        {/* <PromptPage
          className="desktop-home"
          user={user}
          handleSurvey={handleSurvey}
          handleSlider={handleSlider}
          slider={slider}
          moodEmoji={moodEmoji}
          mood={mood}
          handleConfirmMood={handleConfirmMood}
        /> */}
      </div>
      <div className="desktop-history-container">
        <div className="desktop-history">
          <ActivityHistory user={user} />
        </div>
        <div className="desktop-history-detail">
          <ActivityHistoryDetail user={user} />
        </div>
      </div>
      <div className="desktop-chat">
        <ChatHome moodEmoji={moodEmoji} />
      </div>
    </div>
  )
}

export default DesktopPage
