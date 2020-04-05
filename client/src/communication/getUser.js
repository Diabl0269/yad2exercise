import axios from 'axios'

export default async () => {
  const { token } = localStorage
  if (!token) return
  axios.defaults.headers.Authorization = token
  try {
    const { data } = await axios.get(`/users`)
    return data
  } catch {
    return
  }
}
