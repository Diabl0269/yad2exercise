module.exports = async (req, res, next) => {
    const successMessage = 'Got user listings'
    const errorMessage = 'Unabe to get user listings'
    const { user } = req
    try {
      await user.populate('listings').execPopulate()

      req.message = successMessage
      next()
    } catch (e) {
      req.error = e
      req.message += errorMessage
      next()
    }
  }
  