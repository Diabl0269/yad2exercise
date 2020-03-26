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
    console.log(status);
    
    return status === 200
  } catch {
    return
  }
}
