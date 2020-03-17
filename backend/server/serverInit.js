const getListings = require('./routes/getListings');
const addListing = require('./routes/addListing');
const login = require ('./routes/login')
const signUp = require('./routes/signUp');
const getUser = require('./routes/getUser');
const updateUser = require('./routes/updateUser');

module.exports = (app) => {
    app.use('/listings', getListings);
    app.use('/listings', addListing);
    app.use('/users', login)
    app.use('/users', signUp)
    app.use('/users', getUser)
    app.use('/users', updateUser)
};