const { s3, params } = require('../../aws/s3')
const listings = require('../../mongoDB/models/listingsModel')

module.exports = async (req, res, next) => {
  const successMessage = 'Media deleted succefully \n'
  const errorMessage = 'Unable to delete media \n'

  const {
    params: { listingId, mediaId }
  } = req
  params.Key = mediaId

  try {
    await s3.deleteObject(params).promise()
    const listing = await listings.findById(listingId)

    listing.media.images.filter(id => id != mediaId)
    listing.media.videos.filter(id => id != mediaId)
    
    await listing.save()

    req.message += successMessage
    next()
  } catch (e) {
    req.error = e
    req.message += errorMessage
    next()
  }
}
