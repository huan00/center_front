import React from 'react'

const SelectEmotion = ({ handleChange }) => {
  return (
    <div>
      <form>
        <select className="chat-sort" name="mood" id="" onChange={handleChange}>
          <option value="all">All Emotion</option>
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
