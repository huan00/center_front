import React from 'react'

const SelectEmotion = ({ handleMessage }) => {
  return (
    <div>
      <form>
        <label htmlFor="">Emotion: </label>
        <select name="mood" id="" onChange={handleMessage}>
          <option value="all">All</option>
          <option value="sad">Sad</option>
          <option value="happy">Happy</option>
          <option value="anger">Anger</option>
          <option value="nervous">Nervous</option>
          <option value="loved">Loved</option>
          <option value="Anxious">Anxious</option>
        </select>
      </form>
    </div>
  )
}

export default SelectEmotion
