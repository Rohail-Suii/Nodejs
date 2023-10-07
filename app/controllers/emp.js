// implement buiness logic
var Student = require('../models/students');

module.exports.view=function(req, res, next) {
    Student.find().exec().then(docs => {
     res.json(docs);
     }).catch(err => {
         return err
     }
     );
 }
 module.exports.viewName=function(req, res, next) {
    Student.find({name:req.params.name}).exec().then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
}
 module.exports.add=function(req, res, next) { // Use POST instead of GET for adding a new student
    Student.create(req.body).then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
}
module.exports.update=function(req, res, next) {
    Student.findOneAndUpdate({name:req.params.name},{rollno:req.body.rollno}).then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
}
module.exports.delete=function(req, res, next) {
    Student.deleteOne({name:req.params.name}).then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
}