const listingsModel = require("../models/listingsModel");
const fixFilterDefaults = require("../../utils/fixFilterDefaults");

module.exports = (req, res, next) => {  
  fixFilterDefaults(req.body);  
  const sortObject = {
    price: {
      $gte: req.body.price.min,
      $lte: req.body.price.max
    },
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

    ...req.advanced
  };
  

  listingsModel.findWithDefaults(sortObject);
};
