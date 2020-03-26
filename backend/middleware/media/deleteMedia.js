const { s3, params } = require('../../aws/s3')

module.exports = async (req, res, next) => {
  const successMessage = 'Media deleted succefully \n'
  const errorMessage = 'Unable to delete media \n'

  const { params: id, user } = req
  params.Key = id

  try {
    await s3.deleteObject(params).promise()
    user.listings.filter(_id => _id !== id)
    await user.save()
    req.message += successMessage
    next()
  } catch (e) {
    req.error = e
    req.message += errorMessage
    next()
  }
}
