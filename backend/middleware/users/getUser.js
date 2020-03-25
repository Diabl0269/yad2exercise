const usersModel = require('../../mongoDB/models/usersModel')

module.exports = async (req, res, next) => {
  
  const successMessage = 'Got user successfully \n'
  const errorMessage = 'Unable to retrive user \n'
  try {
    req.user = await usersModel.findById(req.userID).exec()
    req.message += successMessage
    next()
  } catch (e) {
    req.message += errorMessage
    req.errorMessage += e
    next()
  }
}
