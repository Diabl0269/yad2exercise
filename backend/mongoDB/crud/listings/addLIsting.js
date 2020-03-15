const listingModel = require("../../models/listingsModel");

module.exports = (req, res, next) => {
  const newListing = req.body;

  listingModel.create(newListing, (error, listing) => {
    if (error) res.locals.error = "לא ניתן להתחבר לשרת";
    else res.locals.message = "הרשומה נוספה בהצלחה";
    next();
  });
};
