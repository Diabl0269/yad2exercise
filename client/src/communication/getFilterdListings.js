import axios from 'axios'

export default async (queryData) => {
  const { data } = await axios.post('/listings', queryData)
  return data
}
