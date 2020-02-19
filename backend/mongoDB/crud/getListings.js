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
    
  // description: { $regex: /[\s\S]+/ },
  // $text: {$search: /[\s\u0000-\uFFFF]*/  },
    ...req.advanced
  };

///^[\s\u05FF-\u0950\uFB1D-\uFB4F]*$/
  
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
