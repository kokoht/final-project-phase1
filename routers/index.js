var express = require('express');
var router = express.Router();

const Models = require('../models');
const crypto = require('crypto');
const hash = require('../helpers/hash')

router.get('/', function(req, res, next) {
  let activeUser = req.session.user
  res.render('index', { activeUser: activeUser});
});

// router to sign up
router.get('/signup', function(req,res, next){
  res.render('registers')
})

router.post('/signup', function(req,res, next){
  Models.User.create({
    fullname: req.body.fullname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  })
  .then(function(){
    res.redirect('/login')
  })
  .catch(err => {
    res.render('errorpage', {
	     panggilData: err.message}
      )
    })
})

router.get('/logout', function(req, res, next) {
  delete req.session.user
  res.redirect('/')
})

module.exports = router;
