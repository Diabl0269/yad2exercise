import axios from 'axios'

export default async (updates, id) => {
  const { token } = localStorage
  if (!token) return
  const updateObj = { updates, id }

  try {
    const { status } = await axios.patch(`/listings/${id}`, updateObj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return status === 204
  } catch {
    return
  }
}
