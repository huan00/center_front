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

export const getMessageDetailById = async (id) => {
  const message = await Client.get(`/messages/messagedetail/${id}`)
  return message.data
}

export const getComments = async (id) => {
  const comment = await Client.get(`/messages/msgtomsg/${id}`)
  return comment.data
}

export const postComment = async (id, data) => {
  const comment = await Client.post(`/messages/msgtomsg/${id}`, data)
  return comment
}
