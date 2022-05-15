import React from 'react'
import Survey from '../../components/promptPages/Survey'

const PromptPage = ({
  handleSlider,
  slider,
  mood,
  moodEmoji,
  handleConfirmMood,
  handleSurvey,
  user
}) => {
  return (
    <div className="container">
      <Survey
        handleSurvey={handleSurvey}
        handleSlider={handleSlider}
        slider={slider}
        user={user}
        moodEmoji={moodEmoji}
        mood={mood}
        handleConfirmMood={handleConfirmMood}
      />
    </div>
  )
}

export default PromptPage
