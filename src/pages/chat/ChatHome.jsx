import React, { useEffect, useState } from 'react'
import InfoCard from '../../components/InfoCard'
import SelectEmotion from '../../components/SelectEmotion'
import { IoCreateOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { getAllMessageChat } from '../../services/Message-service'

const ChatHome = ({ moodEmoji }) => {
  const [messages, setMessages] = useState([])
  const [sortRecent, setSortRecent] = useState('Most recent')
  const [sortEmotion, setEmotion] = useState('all')

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = async () => {
    const msg = await getAllMessageChat()
    setMessages(msg)
  }

  const handleSortEmotion = (e) => {
    setEmotion(e.target.value)
  }

  const filterSort = (a, b, sort) => {
    if (sort === 'Most recent') {
      return new Date(b.createdAt) - new Date(a.createdAt)
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt)
    }
  }

  return (
    <div className="chat">
      <div className="chat-compose">
        <p>Speaks</p>
      </div>
      <div className="chat-sort-form">
        <form>
          <select
            className="chat-sort"
            name="sortRecent"
            id=""
            onChange={(e) => setSortRecent(e.target.value)}
          >
            <option value="Most recent">Most recent</option>
            <option value="Oldest">Oldest</option>
          </select>
        </form>
        <SelectEmotion handleChange={handleSortEmotion} />
        <Link to="compose">
          <IoCreateOutline className="chat-write" />
        </Link>
      </div>
      <div className="chat-content">
        {sortEmotion === 'all'
          ? messages
              .sort((a, b) => filterSort(a, b, sortRecent))
              .map((message) => (
                <InfoCard
                  key={message.id}
                  user={message.User.email}
                  message={message.message}
                  all={message}
                  posted={new Date(message.createdAt).toDateString()}
                  commentCount={parseInt(message.commentMsg.length)}
                  moodEmoji={moodEmoji}
                  getMessages={getMessages}
                />
              ))
          : messages
              .sort((a, b) => filterSort(a, b, sortRecent))
              .filter(
                (mess) =>
                  !mess.messageMood[0] ||
                  mess.messageMood[0].mood === sortEmotion.toLowerCase()
              )
              .map((message) => (
                <InfoCard
                  key={message.id}
                  user={message.User.email}
                  message={message.message}
                  all={message}
                  posted={new Date(message.createdAt).toDateString()}
                  commentCount={parseInt(message.commentMsg.length)}
                  moodEmoji={moodEmoji}
                  getMessages={getMessages}
                />
              ))}
      </div>
    </div>
  )
}

export default ChatHome
