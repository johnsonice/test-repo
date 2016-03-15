
// changes in test2, see if we can merge it to test2testing
>>>>>>> app01
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
    // it will set up a public api, any server can access
    // probably want to set up authandication 
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use('/hello',function(req,res,next){
    res.send('Hello World');
    next();
})


// Connect to MongoDB
mongoose.connect('mongodb://localhost/hereseas');
mongoose.connection.once('open', function() {
    // Load the models.
    app.models = require('./models/index');
    // Load the routes.
    var routes = require('./routes');
    _.each(routes, function(controller, route) {
      app.use(route, controller(app, route));
    });
    //listen to port 3000
  console.log('Listening on port 3000...');
  app.listen(3000); //set up http server, listen to port 3000
});