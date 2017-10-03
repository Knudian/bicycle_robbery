'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RobberySchema = new Schema({
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type:String
    }

});
module.exports = mongoose.model('Robberies', RobberySchema);