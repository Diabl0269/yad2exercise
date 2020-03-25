const uploadFilesArray = require('../../aws/uploadFilesArray')

module.exports = async (req, res, next) => {
  const errorMessage = 'Error in uploading media \n'
  const successMessage = 'Media uploaded successfully \n'
  try {
    const { images, videos } = req.files
    req.body.media.images = await uploadFilesArray(images)
    req.body.media.videos = await uploadFilesArray(videos)

    req.message = successMessage
    next()
  } catch (e) {
    res.error = e
    res.message = errorMessage
  }
}
