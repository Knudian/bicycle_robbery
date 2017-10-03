module.exports = function(app){
    var robbery = require('../controllers/bikeRobberyController');
    app.route('/robberies')
        .get(robbery.robberies)
        .post(robbery.createRobbery);
};