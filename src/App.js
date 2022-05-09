import { Routes, Route, useNavigate } from 'react-router-dom'
import InfoCard from './components/InfoCard'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import Prompt from './pages/Prompt'
import Profile from './pages/Profile'
import './styles/index.css'
import { useEffect, useState } from 'react'
import PromptActivity from './pages/PromptActivity'
import Login from './pages/Login'
import { getMood } from './services/mood-service'

function App() {
  let navigate = useNavigate()

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
  const [captureMood, setCaptureMood] = useState(null)
  const [mood, setMood] = useState([''])

  const [survey, setSurvey] = useState({
    question: 'How are you feeling right now?',
    answer: '',
    moodId: '',
    reason: '',
    userId: 1
  })

  useEffect(() => {
    getMoodList()
  }, [])

  const handleSurvey = (e) => {
    setSurvey({ ...survey, [e.target.name]: e.target.value })
  }

  const getMoodList = async () => {
    const res = await getMood()
    setMood([...mood, ...res.data])
  }

  const handleSlider = (e) => {
    setSlider(e.target.value)
    console.log(slider)
    setSurvey({ ...survey, answer: mood[slider].mood, moodId: slider - 1 })
  }

  console.log(survey)

  const handleConfirmMood = () => {
    setCaptureMood(mood[slider])
    navigate('/select/prompt')
  }

  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path="" element={<Login />} />
          <Route
            path="/select"
            element={
              <Home
                handleSurvey={handleSurvey}
                handleSlider={handleSlider}
                slider={slider}
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
              <PromptActivity handleSlider={handleSlider} survey={survey} />
            }
          />

          <Route path="profile" element={<Profile />} />
        </Routes>
        {/* <SignUp /> */}
      </main>
      <footer></footer>
    </div>
  )
}

export default App
