'use strict';
const http = require('http');
const mongoose = require('mongoose'),
    Robberies = mongoose.model('Robberies');
exports.robberies = ((req, res) => {
    Robberies.find({}, (err, robbery) => {
        if (err)
            res.send(err);
        res.json(robbery);
    });
});

exports.createRobbery = (req, res) =>{
    const robbery = new Robberies(req.body);
    robbery.save((err, rob) => {
       if(err)
           res.send(err);
       res.json(rob);
    });
};