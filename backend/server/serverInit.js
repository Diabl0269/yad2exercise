const getListings = require('./routes/getListings');
const addListing = require('./routes/addListing');

module.exports = (app) => {
    app.use('/listings', getListings);
    app.use('/listings', addListing);
};