import axios from 'axios'

export default async () => {
  const { token } = localStorage
  try {
    const { status } = await axios.delete(`/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const success = status === 204 
    if(success) localStorage.removeItem('token')
    return success
  } catch {
    return
  }
}
