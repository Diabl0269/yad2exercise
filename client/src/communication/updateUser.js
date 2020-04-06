import axios from 'axios'

export default async (listingBody, id) => {
  const { token } = localStorage
  if (!token) return

  try {
    const { data } = await axios.patch(`/users/${id}`, listingBody, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return data
  } catch (e) {
    return
  }
}
