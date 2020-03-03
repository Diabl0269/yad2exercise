const listingsModel = require("../models/listingsModel");

module.exports = (req, res, next) => {
  console.log(JSON.parse(req.query.price));
  
  const sortObject = {
    price: {
      $gte: JSON.parse(req.query.price).min,
      $lte: JSON.parse(req.query.price).max
    },
    // rooms: {
    //   $gte: (JSON.parse(req.query.rooms).min = ""),
    //   $lte: (JSON.parse(req.query.rooms).min = "")
    // },
    // assetType: (req.query.assetTypes = []),
    // roomMates: {
    //   $gte: (JSON.parse(req.query.roomsMates).min = ""),
    //   $lte: (JSON.parse(req.query.roomsMates).max = "")
    // },
    // squareMetersBuilt: {
    //   $gte: (JSON.parse(req.query.totalSquareMeters).min = ""),
    //   $lte: (JSON.parse(req.query.totalSquareMeters).max = "")
    // },
    // floor: { $gte: req.minFloor, $lte: req.maxFloor },

    //ADD TEXT FILTER HERE
    // console.log("/[x{0590}\–x{05FF}\\s]/");
    // description: { $regex: /^[x{0590}\–x{05FF}\\s]*$/ },
    // $text: {$search:  },

    ...req.advanced
  };
  console.log(sortObject);
  
  listingsModel
    .find( {price: {
      $gte: JSON.parse(req.query.price).max,
      $lte: JSON.parse(req.query.price).max
    }})
    .sort()
    .populate("listingUser")
    .exec((error, data) => {      
      if (error) {
        res.locals.error = "לא ניתן להתחבר לשרת";
      } else res.locals.data = data;
      next();
    });
};
