const listings = require('../../mongoDB/models/listingsModel')
const deleteMediaByIdsArray = require('../../utils/deleteMediaByIdsArray')

module.exports = async (req, res, next) => {
  const successMessage = 'Listing update succefully'
  const errorMessage = 'Unable to update listing'
  try {
    const {
      body: { updates, id }
    } = req

    const {
      media: { images: imgUpdates, videos: videoUpdates }
    } = updates

    const listing = await listings.findByIdAndUpdate(id, updates)
    const {
      media: { images, videos }
    } = listing

    const mediaToDelete = images
      .filter(id => imgUpdates.includes(id))
      .concat(videos.filter(id => videoUpdates.includes(id)))
    if (mediaToDelete[0]) await deleteMediaByIdsArray(mediaToDelete)

    req.message += successMessage
    next()
  } catch (e) {
    req.error = e
    req.message += errorMessage
    next()
  }
}
