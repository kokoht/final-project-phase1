var express = require('express');
var router = express.Router();

const Models = require('../models');
 const stat = require('../helpers/status')



//============= start here ============

// 1. sudah nampilin all table !!
// router.get('/', function(req, res){
//   Models.EventUser.findAll({
//     order: [['Event', 'date', 'ASC']],
//     *blm kepake 3 row ini //  where: {
//     //    EventId: req.params.id
//     //  },
//     include: [{all: true}]
//   })
//   .then(function(data){
//     console.log('xxx',data);
//       res.render('events', {panggilData: data
//       })
//   })
// })

// 2. CRUD
// a. tampilin data all events
router.get('/', function(req, res){
  Models.Event.findAll({
    order: [['date', 'asc']]
  })
  .then(function(data){
    //console.log(data);
    // HERE TO CHANGE DATE TO STATUS...
    let status = stat(data)
    res.render('events', {
      panggilData: data,
      pageTitle: "Pak Darso App",
      panggilStatus: status
    })
  })
})

//b Create
router.get('/add', function(req, res){
  res.render('addevent')
})

router.post('/add', function(req, res){
  Models.Event.create({
    name: req.body.name,
    ticket_price: req.body.ticket_price,
    venue: req.body.venue,
    date: req.body.date,
    status: req.body.status,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  .then(function(){
    res.redirect('/events')
  })
  .catch(err => {
    res.render('errorpage', {
	     panggilData: err.message}
      )
    })
  })

  //c. Update and delete

  //================= edit using sequelize syntax
  router.get('/edit/:id', function(req, res){
    Models.Event.findById(req.params.id)
        .then(function(data){
          res.render('editevent', {
            panggilData: data
          })
        })
      })


  router.post('/edit/:id', function(req,res){
    Models.Event.update({
      name: req.body.name,
      ticket_price: req.body.ticket_price,
      venue: req.body.venue,
      date: req.body.date,
      status: req.body.status
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect('/events')
    })
    .catch(err => {
      res.render('errorpage', {
  	     panggilData: err.message}
        )
      })
    });

    // delete
    router.get('/delete/:id', function(req, res){
      Models.Event.destroy({
        where: {id: req.params.id}
      })
      .then(() => {
        res.redirect('/events');
      })
    });



module.exports = router
