import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const getYoutube = async () => {
  console.log(process.env.REACT_APP_API_KEY)
  const video = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYPrd7A27nLhQONcCIfFTaA&&maxResults=20&order=viewcount&key=${API_KEY}`
  )
  return video
}
