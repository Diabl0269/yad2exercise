import axios from 'axios'

export default async loginObj => {
  try {
    const { data } = await axios.post('/users/login', loginObj)
    const { tokens } = data
    const { token } = tokens[tokens.length - 1]
    localStorage.setItem('token', token)
    return data
  } catch {
    return
  }
}
