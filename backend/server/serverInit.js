const getListings = require('./routes/getListings');
const addListing = require('./routes/addListing');
const login = require ('./routes/login')
const signUp = require('./routes/signUp');

module.exports = (app) => {
    app.use('/listings', getListings);
    app.use('/listings', addListing);
    app.use('/login', login)
    app.use('/users', signUp)
};