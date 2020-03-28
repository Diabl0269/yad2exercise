const deleteMediaByIdsArray = require('../../utils/deleteMediaByIdsArray')

module.exports = async (req, res, next) => {
  const successMessage = "Listing's media deleted successfully\n"
  const errorMessage = "Unable to delete listing's media\n"
  try {
    const {
      media: { images, videos }
    } = req.listing
    await deleteMediaByIdsArray(images)
    await deleteMediaByIdsArray(videos)
    req.message += successMessage
    next()
  } catch (e) {
    req.message += errorMessage
    req.error = e
    next()
  }
}
