module.exports = async (req, res, next) => {
  const successMessage = 'Got favorites listings'
  const errorMessage = 'Unabe to get favorites listings'
  const { user } = req
  try {
    await user.populate('favorites').execPopulate()

    console.log(user)
  } catch (e) {
    console.log(e)

    req.message += errorMessage
  }
}
