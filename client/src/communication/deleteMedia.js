import axios from 'axios'

export default async (id) => {
  const { token } = localStorage
  try {
    const { status } = await axios.delete(`/media/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return status === 204
  } catch {
    return
  }
}
