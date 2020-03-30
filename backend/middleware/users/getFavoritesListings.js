module.exports = async (req, res, next) => {
  const successMessage = 'Got favorites listings'
  const errorMessage = 'Unabe to get favorites listings'
  const { user } = req
  try {
    await user.populate('favorites').execPopulate()
    req.message = successMessage
    next()
  } catch (e) {
    req.error = e
    req.message += errorMessage
    next()
  }
}
