const listingsModel = require("../models/listingsModel");

module.exports = async (req, res, next) => {
  const filterObject = {
    price: {
      $range: [req.body.price.min, req.body.price.max]
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
    console.log(filterObject);
    // filterObject
    res.locals.data = await listingsModel.find();
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
