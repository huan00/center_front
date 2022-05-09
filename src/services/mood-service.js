import Client from './Client'

export const getMood = async () => {
  const moods = await Client.get(`/moods`)
  return moods
}
