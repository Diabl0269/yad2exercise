module.exports = async (req, res, next) => {
  const successMessage = 'User favorite toggled succefully'
  const errorMessage = 'Failed to toggle user favorite'
  const { user } = req
  try {
    const { params: {id} } = req
    
    user.favorites.push(id)
    console.log(user);
    
    await user.save()
    req.message += successMessage
    next()
  } catch (e) {
    req.error = e
    req.message += errorMessage
    next()
  }
}
