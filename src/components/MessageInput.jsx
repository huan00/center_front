import SelectEmotion from './SelectEmotion'

const MessageInput = ({
  handleChange,
  handleSubmit,
  privateMsg,
  emotion,
  title,
  handleChatReset
}) => {
  return (
    <div className="message-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="msg">{title}</label>

        {emotion && (
          <>
            <label htmlFor="">What is your current emotion?</label>
            <SelectEmotion handleChange={handleChange} />
          </>
        )}
        {privateMsg && (
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
        )}
        <textarea id="msg" name="message" onChange={handleChange}></textarea>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  )
}

export default MessageInput
