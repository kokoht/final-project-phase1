const express = require('express')
const index = require('./routers/index')
const events = require('./routers/events')
const users = require('./routers/users')
const login = require('./routers/login');
const dashboard = require('./routers/dashboard');
const session = require('express-session')

var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var path_name = path.join(__dirname, 'public')
var express_static = express.static(path_name)
app.use(express_static);

app.use(session({
  secret: 'final',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

app.use('/login', login);
app.use('/dashboard', dashboard);
app.use('/', index);
app.use('/events', events);
app.use('/users', users);

app.listen(process.env.PORT || 3000);
