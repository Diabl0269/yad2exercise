import axios from 'axios'

export default async (user, values) => {
  const { token } = localStorage
  if (!token) return
  const updates = { ...user, ...values }
  const id = window.location.pathname.split('/')[2]

  try {
    const { data } = await axios.patch(`/users/${id}`, updates, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return data
  } catch (e) {
    return
  }
}
