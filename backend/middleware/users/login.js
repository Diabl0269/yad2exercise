const usersModel = require('../../mongoDB/models/usersModel')

module.exports = async (req, res, next) => {
  const successMessage = 'User logged in'
  const errorMessage = 'User failed to log in'
  try {
    res.user = await usersModel.login(req.body.email, req.body.password)
    req.message = successMessage
    next()
  } catch (e) {
    req.error = e
    req.message = errorMessage
    next()
  }
}
