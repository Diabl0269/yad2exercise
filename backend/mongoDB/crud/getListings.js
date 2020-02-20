const listingsModel = require("../models/listingsModel");

module.exports = (req, res, next) => {
  // req.text = /[\s\S]*/;
  const sortObject = {
    price: { $gte: req.minPrice, $lte: req.maxPrice },
    rooms: { $gte: req.minRooms, $lte: req.maxRooms },
    assetType: req.assetType,
    roomMates: {$gte: req.minRoommates, $lte: req.maxRoommates},
    squareMetersBuilt: {$gte: req.minSquareMetersBuilt, $lte: req.maxSquareMetersBuilt},
    floor: {$gte: req.minFloor, $lte: req.maxFloor},
    
  // description: { $regex: /^[x{0590}\–x{05FF}\\s]*$/ },
// $text: {$search:  },
    ...req.advanced
  };

  console.log("/[x{0590}\–x{05FF}\\s]/");
  

  listingsModel
    .find(sortObject)
    .sort()
    .populate("listingUser")
    .exec((error, data) => {
      if (error) {
        console.log(error);    
        res.locals.error = "לא ניתן להתחבר לשרת";
      }
      else res.locals.data = data;
      next();
    });
};
