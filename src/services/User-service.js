import Client from './Client'

export const getUserDetails = async (id) => {
  const details = await Client.get(`users/detail/${id}`)
  console.log(details)
  return details.data.Surveys
}
