import axios from 'axios'

export default async id => {
  const { token } = localStorage
  if (!token) return

  try {
    const res = await axios.patch(`/users/favorite/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return res.status === 204
  } catch {
    return
  }
}
