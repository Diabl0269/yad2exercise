const listings = require('../../mongoDB/models/listingsModel')

module.exports = async (req, res, next) => {
  const successMessage = 'Listing deleted successfully \n'
  const errorMessage = 'Unable to delete listing \n'
  try {
    const {
      params: { id }
    } = req

    req.listing = await listings.findByIdAndDelete(id)

    req.message = successMessage
    next()
  } catch (e) {
    req.message = errorMessage
    req.error = e
    next()
  }
}
