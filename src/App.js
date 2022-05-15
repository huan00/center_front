import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import '../src/styles/App.css'
import { useEffect, useState } from 'react'
import Login from './pages/Login'
import { getMood } from './services/mood-service'
import { CheckSession } from './services/Auth-service'
import { postSurvey } from './services/survey-service'
import ActivityHistory from './pages/ActivityHistory'
import Compose from './pages/chat/Compose'
import ActivityHistoryDetail from './pages/activitydetail/ActivityHistoryDetail'
import ChatHome from './pages/chat/ChatHome'
import Conversation from './pages/chat/Conversation'
import Comment from './pages/chat/Comment'
import ProfileSetting from './pages/profile/ProfileSetting'
import ActivityDetailPage from './pages/activitydetail/ActivityDetailPage'
import SelfMessage from './pages/activitydetail/SelfMessage'
import DesktopPage from './pages/DesktopPage'
import { DesktopNav } from './components/DesktopNav'
import { PromptPageTwo } from './pages/prompt/PromptPageTwo'
import PromptPage from './pages/prompt/PromptPage'
import PromptPageThree from './pages/prompt/PromptPageThree'
import ActivityOne from './pages/prompt/activity/ActivityOne'
import ActivityTwo from './pages/prompt/activity/ActivityTwo'
import ActivityThree from './pages/prompt/activity/ActivityThree'

function App() {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [slider, setSlider] = useState(0)
  const [moodEmoji] = useState(['', '😔', '😁', '😡', '😱', '😍', '😬'])
  const [mood, setMood] = useState([''])
  const [windowWidth, setWindowWidth] = useState('375')
  const [logData, setLogData] = useState('')

  const [survey, setSurvey] = useState({
    question: 'How are you feeling right now?',
    answer: '',
    moodId: '',
    activity: '',
    reason: '',
    userId: ''
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getMoodList()
    setWindowWidth(window.innerWidth)
  }, [windowWidth])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    if (user) {
      setSurvey({ ...survey, userId: user.id })
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  const handleSurvey = (e) => {
    setSurvey({ ...survey, [e.target.name]: e.target.value })
  }

  const getMoodList = async () => {
    const res = await getMood()
    setMood([...mood, ...res.data])
  }

  const postSurveyResult = async () => {
    if (
      survey.question &&
      survey.answer &&
      survey.moodId &&
      survey.reason &&
      survey.userId
    ) {
      const res = await postSurvey(survey)
    }
    setSurvey({
      question: 'How are you feeling right now?',
      answer: '',
      moodId: '',
      activity: '',
      reason: '',
      userId: user.id
    })
    setSlider(0)
  }

  const handleSlider = (e) => {
    setSlider(e.target.value)
  }

  const handleConfirmMood = () => {
    setSurvey({ ...survey, answer: mood[slider].mood, moodId: slider })
    navigate('/survey/cause')
  }

  const handleHistoryPage = (data) => {
    setLogData(data)
    if (data === '') {
      data = 'All'
    }
    navigate(`activity/history/${data}`)
  }

  const handleSelectLog = (data) => {
    navigate(`activity/history/${logData}/detail/${data}`)
  }

  const handleResetHistoryPage = () => {
    console.log('hit')
    navigate(`activity`)
  }

  const navigateToDesktop = () => {
    navigate('/')
  }

  return windowWidth <= 768 ? (
    <div className="App">
      <nav>
        <NavBar handleLogout={handleLogout} user={user} />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} user={user} />} />
          {/* {user ? ( */}
          <Route
            path="/survey"
            element={
              <PromptPage
                handleSurvey={handleSurvey}
                handleSlider={handleSlider}
                slider={slider}
                user={user}
                moodEmoji={moodEmoji}
                mood={mood}
                handleConfirmMood={handleConfirmMood}
              />
            }
          />
          <Route
            path="/survey/cause"
            element={
              <PromptPageTwo
                handleSlider={handleSlider}
                survey={survey}
                setSurvey={setSurvey}
              />
            }
          />
          <Route
            path="/survey/cause/activity"
            element={
              <PromptPageThree
                handleSlider={handleSlider}
                survey={survey}
                setSurvey={setSurvey}
                postSurveyResult={postSurveyResult}
              />
            }
          />
          <Route
            path="/survey/cause/activity/breathing"
            element={
              <ActivityOne
                postSurveyResult={postSurveyResult}
                survey={survey}
                setSurvey={setSurvey}
              />
            }
          />
          <Route
            path="/survey/cause/activity/distraction"
            element={
              <ActivityTwo
                postSurveyResult={postSurveyResult}
                setSurvey={setSurvey}
                survey={survey}
              />
            }
          />
          <Route
            path="/survey/cause/activity/logit"
            element={
              <ActivityThree user={user} postSurveyResult={postSurveyResult} />
            }
          />
          /************Activity********* */
          {user && (
            <Route
              path="/activity"
              element={
                <ActivityHistory
                  user={user}
                  checkToken={checkToken}
                  handleHistoryPage={handleHistoryPage}
                />
              }
            />
          )}
          {user && (
            <Route
              path="/activity/history/:id"
              element={
                <ActivityHistoryDetail
                  user={user}
                  handleSelectLog={handleSelectLog}
                />
              }
            />
          )}
          <Route
            path="/activity/history/:id/detail/:id"
            element={
              <ActivityDetailPage
                user={user}
                handleResetHistoryPage={handleResetHistoryPage}
              />
            }
          />
          {user && (
            <Route
              path="/activity/history/Logit/selfmessage"
              element={<SelfMessage user={user} />}
            />
          )}
          /********CHAT********* */
          <Route path="/chat" element={<ChatHome moodEmoji={moodEmoji} />} />
          <Route path="/chat/compose" element={<Compose user={user} />} />
          <Route
            path="/chat/conversation/:id"
            element={<Conversation moodEmoji={moodEmoji} user={user} />}
          />
          <Route
            path="/chat/conversation/:id/comment/:id"
            element={<Comment user={user} />}
          />
          /**********Profile************* */
          {user && (
            <Route
              path="/user/setting"
              element={<ProfileSetting user={user} />}
            />
          )}
        </Routes>
      </main>
    </div>
  ) : (
    /*********Desktop********** */

    <div className="desktop-container">
      <main className="desktop-main">
        <nav className="desktop-nav">
          <DesktopNav user={user} handleLogout={handleLogout} />
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Login setUser={setUser} user={user} desktop={true} />}
          />
          <Route
            path="/dashboard"
            element={
              <DesktopPage
                user={user}
                handleSurvey={handleSurvey}
                handleSlider={handleSlider}
                slider={slider}
                setSlider={setSlider}
                moodEmoji={moodEmoji}
                mood={mood}
                handleConfirmMood={handleConfirmMood}
                setSurvey={setSurvey}
                survey={survey}
                postSurveyResult={postSurveyResult}
              />
            }
          />
          <Route
            path="/user/setting"
            element={<ProfileSetting user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
