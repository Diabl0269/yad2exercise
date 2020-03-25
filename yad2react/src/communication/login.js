import axios from 'axios'

export default async loginObj => {
  try {
    const res = await axios.post('/users/login', loginObj)
    const { tokens } = res.data
    const { token } = tokens[tokens.length - 1]
    localStorage.setItem('token', token)
    return res.data
  } catch {
    return
  }
}
