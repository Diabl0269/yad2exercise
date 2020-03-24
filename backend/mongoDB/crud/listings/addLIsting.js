const listingModel = require("../../models/listingsModel");

module.exports = async (req, res, next) => {
  const newListing = req.body;

  const successMessage = "Listing added successfully \n";
  const errorMessage = "Unable to add listing \n";
  try {
    //Add the listing
    const listing = await listingModel.create(newListing);
    const { id } = listing;
    
    //Update user listings data
    req.user.listings.push(id);
    req.user.save();

    req.message += successMessage;
    next();
  } catch (e) {
    req.error += e;
    req.message += errorMessage;
    next();
  }
};
