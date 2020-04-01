const listingsModel = require('../../mongoDB/models/listingsModel')

module.exports = async (req, res, next) => {
  const errorMessage = 'Failed to retrive listings \n'
  const successMessage = 'Got listings successfully \n'

  const { body, query } = req
  
  if (req.user) filterObject.listingUser = req.userID

  try {
    res.count = await listingsModel.countDocuments(query)

    res.listings = await listingsModel
      .find(query)
      .sort(body.sortBy)
      .skip(body.skip)
      .limit(10)
      .populate('listingUser', '-password -_id -salt -tokens')
      .exec()
    
    req.message = successMessage

    next()
  } catch (e) {
    req.error = e
    req.message = errorMessage
    next()
  }
}
