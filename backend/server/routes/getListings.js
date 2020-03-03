const express = require("express");
const router = express.Router();
const getListings = require("../../mongoDB/crud/getListings");

module.exports = router.get("/", getListings, (req, res, next) => {  
  if (res.locals.error) return res.status(500).send(res.locals.error);
  else return res.send(res.locals.data);
});
