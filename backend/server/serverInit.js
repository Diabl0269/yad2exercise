const addListing = require('./routes/addListing')
const addMedia = require('./routes/addMedia')
const auth = require('../middleware/auth')
const authRoute = require('./routes/auth')
const deleteListing = require('./routes/deleteListing')
const deleteMedia = require('./routes/deleteMedia')
const deleteUser = require('./routes/deleteUser')
const getFavoritesListings = require('../middleware/users/getFavoritesListings')
const getListings = require('./routes/getListings')
const getUser = require('../middleware/users/getUser')
const getUserRoute = require('./routes/getUser')
const login = require('./routes/login')
const signUp = require('./routes/signUp')
const toggleFavorite = require('./routes/toggleFavorite')
const updateUser = require('./routes/updateUser')
const path = require('path')
const getUserListings = require('./routes/getUserListings');

module.exports = app => {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
  })

  app.use('/listings', getListings)

  app.use('/listings', auth)
  app.use('/listings', addListing)
  app.use('/listings', deleteListing)

  app.use('/media', auth)
  app.use('/media', deleteMedia)
  app.use('/media', addMedia)

  app.use('/users', login)
  app.use('/users', signUp)

  app.use('/users', auth)
  app.use('/users', authRoute)
  app.use('/users', deleteUser)
  app.use('/users/favorite', toggleFavorite)
  app.use('/users/favorite-listings', getUser, getFavoritesListings)
  app.use('/users', getUserRoute)
  app.use('/users', updateUser)
  app.use('/users/listings', getUser, getUserListings)
}
