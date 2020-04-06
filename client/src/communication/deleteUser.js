import axios from 'axios'

export default async () => {
  const { token } = localStorage
  try {
    const { status } = await axios.delete(`/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return status === 204
  } catch {
    return
  }
}
