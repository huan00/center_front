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
import ActivityDetailPage from './activitydetail/ActivityDetailPage'
import Compose from './chat/Compose'
import Conversation from './chat/Conversation'
import Comment from './chat/Comment'
import SelfMessage from './activitydetail/SelfMessage'

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
  const [historyPage, setHistoryPage] = useState(1)
  const [historyAct, setHistoryAct] = useState('')
  const [historyLog, setHistoryLog] = useState('')
  const [chatPage, setChatPage] = useState(1)
  const [convId, setConvId] = useState('')

  const handleConfirmMood = () => {
    setSurvey({ ...survey, answer: mood[slider].mood, moodId: slider })
    setPageCount(pageCount + 1)
  }

  const handleCause = (ans) => {
    setSurvey({ ...survey, reason: ans })
    setPageCount(pageCount + 1)
  }
  const handleRestPage = () => {
    setPageCount(1)
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
            handleRestPage={handleRestPage}
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

      default:
        break
    }
  }

  const handleHistoryPage = (data) => {
    if (data === '') {
      data = 'All'
    }
    setHistoryAct(data)

    setHistoryPage(historyPage + 1)
  }
  const handleSelectLog = (data) => {
    setHistoryLog(data)
    setHistoryPage(historyPage + 1)
  }
  const handleResetHistoryPage = () => {
    setHistoryPage(1)
  }
  const handleSelfMessage = () => {
    console.log(4)
    setHistoryPage(4)
  }

  const renderActivity = () => {
    switch (historyPage) {
      case 1:
        return (
          <ActivityHistory user={user} handleHistoryPage={handleHistoryPage} />
        )
      case 2:
        return (
          <ActivityHistoryDetail
            user={user}
            category={historyAct}
            handleSelectLog={handleSelectLog}
            handleSelfMessage={handleSelfMessage}
            desktop={true}
          />
        )
      case 3:
        return (
          <ActivityDetailPage
            user={user}
            historyLog={historyLog}
            handleResetHistoryPage={handleResetHistoryPage}
          />
        )
      case 4:
        return (
          <SelfMessage
            user={user}
            handleResetHistoryPage={handleResetHistoryPage}
          />
        )
      default:
        break
    }
  }

  const handleChatCompose = () => {
    setChatPage('compose')
  }
  const handleChatReset = () => {
    setChatPage(1)
  }
  const handleConversation = (data) => {
    console.log(data)
    setConvId(data)
    setChatPage('conversation')
  }

  const renderChat = () => {
    switch (chatPage) {
      case 1:
        return (
          <ChatHome
            moodEmoji={moodEmoji}
            handleChatCompose={handleChatCompose}
            handleConversation={handleConversation}
          />
        )
      case 'compose':
        return <Compose user={user} handleChatReset={handleChatReset} />
      case 'conversation':
        return (
          <Conversation
            moodEmoji={moodEmoji}
            user={user}
            convId={convId}
            handleChatReset={handleChatReset}
          />
        )
      case 4:
        return <Comment user={user} />

      default:
        break
    }
  }

  return (
    <div className="desktop">
      <div className="desktop-slider">{renderSurvey()}</div>
      <div className="desktop-history">{renderActivity()}</div>
      <div className="desktop-chat">{renderChat()}</div>
    </div>
  )
}

export default DesktopPage
