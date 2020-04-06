import axios from 'axios'

export default async queryData => {
  const { token } = localStorage
  const { data } = await axios.post('/users/favorite-listings', queryData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  return data
}
