const usersModel = require('../../mongoDB/models/usersModel')

module.exports = async (req, res, next) => {
  const successMessage = 'User signed up succefully \n'
  const errorMessage = 'Unable to sign up new user \n'
  const { firstName, lastName, phone, phone2, email, agencyName } = req.body
  const userDetails = { firstName, lastName, email, phone, phone2, email, agencyName }
  const detailsObj = { userDetails, password: req.body.password }

  const user = new usersModel(detailsObj)
  try {
    res.user = await user.save()
    req.message = successMessage
    next()
  } catch (e) {
    req.message = errorMessage
    req.error = e
    next()
  }
}
