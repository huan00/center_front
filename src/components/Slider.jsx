import React from 'react'

const Slider = ({ handleSlider, moodWord, slider }) => {
  return (
    <div className="slider">
      <h1>{moodWord[slider]}</h1>
      <input
        className="slider-input"
        type="range"
        min="-1"
        max="5"
        defaultValue="-1"
        onChange={handleSlider}
      />
    </div>
  )
}

export default Slider
