import axios from 'axios'

export default async mediaId => {
  const { listing, token } = localStorage
  const { id: listingId } = JSON.parse(listing)

  try {
    const { status } = await axios.delete(`/media/${listingId}/${mediaId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return status === 204
  } catch {
    return
  }
}
