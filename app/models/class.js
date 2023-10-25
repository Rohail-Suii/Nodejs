// interact with the database


var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    students:{
        type:[{
            sid:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            },
        }]
    },
});
module.exports = mongoose.model('Class', classSchema);