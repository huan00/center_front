import React from 'react'

const SelectEmotion = ({ handleChange }) => {
  return (
    <div>
      <form>
        <label htmlFor="">Emotion: </label>
        <select name="mood" id="" onChange={handleChange}>
          <option value="all">All</option>
          <option value="sad">Sad</option>
          <option value="happy">Happy</option>
          <option value="angry">Angry</option>
          <option value="nervous">Nervous</option>
          <option value="loved">Loved</option>
          <option value="anxious">Anxious</option>
        </select>
      </form>
    </div>
  )
}

export default SelectEmotion