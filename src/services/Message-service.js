import Client from './Client'

export const postMessage = async (data) => {
  const message = await Client.post(`/messages/new`, data)
  console.log(message)
}
