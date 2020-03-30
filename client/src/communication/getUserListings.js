import axios from 'axios'

export default async ({ queryObj }) => {  
  const { token } = localStorage
  const  {data}  = await axios.post('/users/listings', queryObj, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  return data
}
