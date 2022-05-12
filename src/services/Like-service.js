import Client from './Client'

export const updateLike = async (data) => {
  const res = await Client.post(`ratings/createupdate`, data)
  console.log(res)
  return res
}
