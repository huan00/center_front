import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import Slider from '../components/Slider'
import Mood from '../components/Mood'

const Home = ({
  handleSlider,
  slider,
  mood,
  moodEmoji,
  handleConfirmMood,
  handleSurvey,
  user
}) => {
  const [greeting, setGreeting] = useState(`How are you feeling right now?`)

  useEffect(() => {}, [])

  return user ? (
    <div className="home">
      <div className="home-greeting">
        <h1 className="home-title">
          {user.firstName}, {greeting}
        </h1>
      </div>
      {slider > 0 && (
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
  ) : (
    <div className="container">
      <h3>Loading...</h3>
    </div>
  )
}

export default Home
