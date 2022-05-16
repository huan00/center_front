import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const getYoutube = async (data) => {
  const video = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${data}&maxResults=5&order=viewcount&key=${API_KEY}`
  )
  return video
}
