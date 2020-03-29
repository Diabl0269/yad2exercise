import axios from 'axios'
import appendFormFromArray from '../utils/appendFormFromArray'

export default async values => {
  const { images, videos } = values
  let formData = new FormData()
  const { token } = localStorage

  //Append all media and values to the form
  appendFormFromArray(formData, images, 'images')
  appendFormFromArray(formData, videos, 'videos')
  formData.append('fields', JSON.stringify(values))

  try {
    const res = await axios.post('/listings/add', formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return !!res
  } catch (e) {
    return
  }
}
