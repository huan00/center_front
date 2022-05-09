import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import SignUp from '../components/SignUp'
import Slider from '../components/Slider'
import Mood from '../components/Mood'

const Home = ({
  handleSlider,
  slider,
  mood,
  moodEmoji,
  handleConfirmMood,
  handleSurvey
}) => {
  const [greeting, setGreeting] = useState(
    'Morning, Anna How are you feeling right now?'
  )

  useEffect(() => {}, [])

  return (
    <div className="home">
      <div className="home-greeting">
        <h1 className="home-title">{greeting}</h1>
      </div>
      {slider && (
        <div className="home-mood">
          <Mood
            slider={slider}
            mood={mood}
            moodEmoji={moodEmoji}
            handleConfirmMood={handleConfirmMood}
          />
        </div>
      )}
      <div className="home-slider">
        <Slider
          handleSlider={handleSlider}
          mood={mood}
          slider={slider}
          handleSurvey={handleSurvey}
        />
      </div>
    </div>
  )
}

export default Home
