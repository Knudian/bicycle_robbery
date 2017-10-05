const express = require('express'),
    app = express(),
    port = process.env.PORT || 3400,
    mongoose = require('mongoose'),
    Robbery = require('./api/models/bikeRobberyModel'),
    routes = require('./api/routes/bikeRobberyRoutes'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/Bicycle', { useMongoClient: true, promiseLibrary: global.Promise });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

module.exports = app;