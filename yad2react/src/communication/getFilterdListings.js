import axios from 'axios'
import mapStateToData from '../utils/mapStateToData'

export default async (queryObj) => {
  const queryData = mapStateToData(queryObj)
  const { data } = await axios.post('/listings', queryData)
  return data
}
