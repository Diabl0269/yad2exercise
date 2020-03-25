import axios from 'axios'

export default async () => {
  const { token } = localStorage
  if (!token) return
  try {
    const { status } = await axios.get('/users/auth', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return status === 200 ? true : false
  } catch {
    return
  }
}
