import { Routes, Route, useNavigate } from 'react-router-dom'
import InfoCard from './components/InfoCard'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import PromptOne from './pages/PromptOne'
import Profile from './pages/Profile'
import './styles/index.css'
import { useState } from 'react'

function App() {
  let navigate = useNavigate()
  const [slider, setSlider] = useState(null)
  const [mood, setMood] = useState(['😁', '😔', '🤩', '😡', '😰', '🥰'])
  const [captureMood, setCaptureMood] = useState(null)
  const [moodWord, setMoodWord] = useState([
    'Happy',
    'Sad',
    'Excited',
    'Angry',
    'Nervous',
    'Loved'
  ])

  const handleSlider = (e) => {
    setSlider(e.target.value)
  }

  const handleConfirmMood = () => {
    setCaptureMood(moodWord[slider])
    navigate('/promptone')
  }

  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route
            path=""
            element={
              <Home
                handleSlider={handleSlider}
                slider={slider}
                mood={mood}
                moodWord={moodWord}
                handleConfirmMood={handleConfirmMood}
              />
            }
          />
          <Route
            path="promptone"
            element={<PromptOne handleSlider={handleSlider} />}
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
