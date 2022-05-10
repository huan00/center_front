import Client from './Client'

export const postMessage = async (data) => {
  const message = await Client.post(`/messages/new`, data)
  console.log(message)
}

export const postNewJoinMessage = async (data) => {
  const message = await Client.post(`/messages/newjoinmessage`, data)
  return message
}

export const getAllMessageChat = async (data) => {
  const messages = await Client.get(`/messages/noneprivate`)

  return messages.data
}
