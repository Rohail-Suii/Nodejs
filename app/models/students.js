// interact with the database


var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    rollno:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Student', Schema);