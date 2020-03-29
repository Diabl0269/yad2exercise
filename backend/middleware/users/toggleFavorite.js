module.exports = async (req, res, next) => {
  const successMessage = 'User favorite toggled succefully'
  const errorMessage = 'Failed to toggle user favorite'
  try {
    const {
      params: { id },
      user
    } = req
    const { favorites } = user

    const newFavs = favorites.filter(_id => {
      return _id.toString() !== id
    })
    const didNotFilter = favorites.length === newFavs.length

    if (didNotFilter) newFavs.push(id)

    user.favorites = newFavs
    
    await user.save()
    req.message += successMessage
    next()
  } catch (e) {
    req.error = e
    req.message += errorMessage
    next()
  }
}
