const listingModel = require("../../models/listingsModel");

module.exports = async (req, res, next) => {
  const newListing = req.body;

  try {
    await listingModel.create(newListing);
    res.locals.message = "הרשומה נוספה בהצלחה";
    next();
  } catch {
    res.status(500).send("לא ניתן להתחבר לשרת");
  }
};
