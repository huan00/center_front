import React, { useState } from 'react'
import SelectEmotion from './SelectEmotion'

const MessageInput = ({ handleChange, handleSubmit }) => {
  return (
    <div className="message-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="msg">What on your mind?</label>
        <label htmlFor="">What is your current emotion?</label>
        <SelectEmotion handleChange={handleChange} />
        <section>
          <label htmlFor="">Private: </label>
          <input
            type="radio"
            value="true"
            id="true"
            name="private"
            onChange={handleChange}
          />
          <label htmlFor="true">true</label>
          <input
            type="radio"
            value="false"
            id="false"
            name="private"
            onChange={handleChange}
          />
          <label htmlFor="false">false</label>
        </section>
        <textarea id="msg" name="message" onChange={handleChange}></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default MessageInput
