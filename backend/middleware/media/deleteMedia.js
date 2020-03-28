const { s3, params } = require('../../aws/s3')
const listings = require('../../mongoDB/models/listingsModel')

module.exports = async (req, res, next) => {
  const successMessage = 'Media deleted succefully \n'
  const errorMessage = 'Unable to delete media \n'

  const { params: id } = req
  params.Key = id

  try {
    await s3.deleteObject(params).promise()
    const listing = await listings.findById(id)

    listing.media.images.filter(mediaID => mediaID != id)
    listing.media.videos.filter(mediaID => mediaID != id)

    await listing.save()

    listing.req.message += successMessage
    next()
  } catch (e) {
    req.error = e
    req.message += errorMessage
    next()
  }
}
