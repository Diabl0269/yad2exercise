const listingsModel = require('../../mongoDB/models/listingsModel')

module.exports = async (req, res, next) => {
  const errorMessage = 'Failed to retrive listings \n'
  const successMessage = 'Got listings successfully \n'
  const filterObject = {
    // price: {
    // saleDetails: {
    // $lte: req.body.price.max
    // }
    // $range: [req.body.price.min, req.body.price.max]
    // 'saleDetails.price': {$filter: {
    //   input: "$saleDetails.price",
    //   as: "price",
    //   $cond: { $gte: [ "$$price", req.body.price.min ] }
    // }}
    // }
    // $gte: req.body.price.min,
    // $lte: req.body.price.max
    // rooms: {
    //   $gte: (req.body.rooms.min = ""),
    //   $lte: (req.body.rooms.min = "")
    // },
    // assetType: (req.body.assetTypes = []),
    // roomMates: {
    //   $gte: (req.body.roomsMates.min = ""),
    //   $lte: (req.body.roomsMates.max = "")
    // },
    // squareMetersBuilt: {
    //   $gte: (req.body.totalSquareMeters.min = ""),
    //   $lte: (req.body.totalSquareMeters.max = "")
    // },
    // floor: { $gte: req.body.minFloor, $lte: req.body.maxFloor },
    //ADD TEXT FILTER HERE
    // console.log("/[x{0590}\–x{05FF}\\s]/");
    // description: { $regex: /^[x{0590}\–x{05FF}\\s]*$/ },
    // $text: {$search:  },
    // ...req.advanced
  }

  if (req.user) filterObject.listingUser = req.userID

  try {
    res.count = await listingsModel.countDocuments(filterObject)

    res.listings = await listingsModel
      .find(filterObject)
      .sort(req.body.sortBy)
      .skip(req.body.skip)
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
