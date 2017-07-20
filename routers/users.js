var express = require('express')
var router = express.Router();

const Models = require('../models');

//--------------------- START here...
router.get('/', function(req, res){
  res.send("welcome")
})

module.exports = router
