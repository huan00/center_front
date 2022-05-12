import { Routes, Route, useNavigate } from 'react-router-dom'
import InfoCard from './components/InfoCard'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import Prompt from './pages/Prompt'
import Profile from './pages/profile/Profile'
import './styles/index.css'
import { useEffect, useState } from 'react'
import PromptActivity from './pages/PromptActivity'
import Login from './pages/Login'
import { getMood } from './services/mood-service'
import { CheckSession } from './services/Auth-service'
import { postSurvey } from './services/survey-service'
import Breathing from './pages/Breathing'
import Distraction from './pages/Distraction'
import LogIt from './pages/LogIt'
import ActivityHistory from './pages/ActivityHistory'
import Compose from './pages/chat/Compose'
import ActivityHistoryDetail from './pages/activitydetail/ActivityHistoryDetail'
import ChatHome from './pages/chat/ChatHome'
import Conversation from './pages/chat/Conversation'
import Comment from './pages/chat/Comment'
import ProfileSetting from './pages/profile/ProfileSetting'
import { IoIosLogOut } from 'react-icons/io'

function App() {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [currentUrl, setCurrentUrl] = useState(window.location.href)
  const [slider, setSlider] = useState(0)
  const [moodEmoji, setMoodEmoji] = useState([
    '',
    '😔',
    '😁',
    '😡',
    '😱',
    '😍',
    '😬'
  ])
  const [mood, setMood] = useState([''])

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
  }, [])

  console.log(window.location.href)

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
      // survey.activity &&
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
  }

  const handleSlider = (e) => {
    setSlider(e.target.value)
  }

  const handleConfirmMood = () => {
    setSurvey({ ...survey, answer: mood[slider].mood, moodId: slider })
    navigate('/select/prompt')
  }

  return (
    <div className="App">
      <nav>
        <NavBar handleLogout={handleLogout} user={user} />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} user={user} />} />
        </Routes>
        {user ? (
          <Routes>
            <Route
              path="/select"
              element={
                <Home
                  handleSurvey={handleSurvey}
                  handleSlider={handleSlider}
                  slider={slider}
                  user={user}
                  setSlider={setSlider}
                  moodEmoji={moodEmoji}
                  mood={mood}
                  handleConfirmMood={handleConfirmMood}
                />
              }
            />
            <Route
              path="select/prompt"
              element={
                <Prompt
                  handleSlider={handleSlider}
                  setSurvey={setSurvey}
                  survey={survey}
                />
              }
            />
            <Route
              path="select/prompt/activity"
              element={
                <PromptActivity
                  handleSlider={handleSlider}
                  survey={survey}
                  setSurvey={setSurvey}
                  postSurveyResult={postSurveyResult}
                />
              }
            />
            <Route
              path="select/prompt/activity/breathing"
              element={
                <Breathing
                  postSurveyResult={postSurveyResult}
                  setSurvey={setSurvey}
                  survey={survey}
                  user={user}
                />
              }
            />
            <Route
              path="select/prompt/activity/distraction"
              element={
                <Distraction
                  postSurveyResult={postSurveyResult}
                  setSurvey={setSurvey}
                  survey={survey}
                />
              }
            />
            <Route
              path="select/prompt/activity/logit"
              element={
                <LogIt
                  user={user}
                  postSurveyResult={postSurveyResult}
                  setSurvey={setSurvey}
                  survey={survey}
                />
              }
            />
            {user && (
              <Route
                path="user/activity"
                element={
                  <ActivityHistory user={user} checkToken={checkToken} />
                }
              />
            )}
            {user && (
              <Route
                path="user/activity/history/:id"
                element={<ActivityHistoryDetail user={user} />}
              />
            )}
            <Route path="profile" element={<Profile />} />
            /********CHAT********* */
            <Route path="/chat" element={<ChatHome moodEmoji={moodEmoji} />} />
            <Route path="chat/compose" element={<Compose user={user} />} />
            <Route
              path="chat/conversation/:id"
              element={<Conversation moodEmoji={moodEmoji} user={user} />}
            />
            <Route
              path="chat/conversation/:id/comment/:id"
              element={<Comment user={user} />}
            />
            /**********Profile************* */
            <Route
              path="user/setting"
              element={<ProfileSetting user={user} />}
            />
          </Routes>
        ) : window.location.href != 'http://localhost:3000/' ? (
          <div className="container loadingScreen">
            Please Log in to get access
            <IoIosLogOut
              className="menu-icon faComments loadScreen-icon"
              onClick={handleLogout}
            />
          </div>
        ) : (
          ''
        )}
      </main>
      <footer></footer>
    </div>
  )
}

export default App
