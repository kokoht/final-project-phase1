var express = require('express')
var router = express.Router();

const Models = require('../models');
const stat = require('../helpers/status')


router.get('/', function(req, res){
  Models.Event.findAll({
    order: [['date', 'asc']]
  })
  .then(function(data){
    let status = stat(data)
    console.log('zzz',data);
    res.render('users', {
      panggilData: data,
      pageTitle: "Pak Darso App",
      panggilStatus: status
    })
  })
})

// INI BUAT NAMPILIN MANY TO MANY
// router.get('/choose/:id', function(req, res){
//   Models.EventUser.findAll({
//     // order: [['Student', 'first_name', 'ASC']],
//      where: {
//        EventId: req.params.id
//      },
//     include: [{all: true}]
//   })
//   .then(function(data){
//     console.log('xxx',data);
//       res.render('thankyou', {panggilData: data
//       })
//   })
// })

router.get('/choose/:id', function(req, res){
  Models.Event.findById(req.params.id)
  .then(function(data){
    //console.log('xxx',data.name);
      res.render('thankyou', {panggilData: data
      })
  })
})












//
// router.get('/edit/:id', function(req, res){
//   Models.Teacher.findById(req.params.id)
//   .then(function(data){
//     Models.Subject.findAll()
//       .then(function(data1){
//         res.render('editteacher', {
//           panggilData: data,
//           panggilDataDropdown: data1
//         })
//       })
//     })
//   })














module.exports = router
