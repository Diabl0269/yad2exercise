const listingsModel = require("../models/listingsModel");

module.exports = async (req, res, next) => {
  const filterObject = {
    price: {
      // $range: [req.body.price.min, req.body.price.max]
    }
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
  };

  try {
    const result = await listingsModel
      .find()
      .sort(req.body.sortBy)
      .populate("listingUser")
      .exec();

    //VERY BAD, DONT USE THIS IN PRODUCTION
    if (req.body.price.min && req.body.price.max)
      res.locals.data = result.filter(
        record =>
          record.saleDetails.price >= req.body.price.min &&
          record.saleDetails.price <= req.body.price.max
      );
    else res.locals.data = result;

    next();
  } catch {
    res.status(500).send("שגיאת שרת");
  }

  // const listings = await listingsModel
  //   .find(data)
  //   .sort()
  //   .populate("listingUser")
  //   .exec();

  // res.locals = listingsModel.findWithDefaults(sortObject);
};
