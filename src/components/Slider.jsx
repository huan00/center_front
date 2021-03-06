import React from 'react'

const Slider = ({ handleSlider, mood, slider }) => {
  return (
    <div className="slider">
      {mood && slider > 0 && <h1>{mood[slider].mood}</h1>}
      <input
        className="slider-input"
        type="range"
        min="0"
        max="6"
        defaultValue="0"
        onChange={handleSlider}
        name="question"
      />
    </div>
  )
}

export default Slider
