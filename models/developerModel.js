const mongoose = require('mongoose');


const developerModel = mongoose.Schema({
    name    : String,
    skill   : String,
    age     : Number
});


module.exports = mongoose.model('Developer' , developerModel);