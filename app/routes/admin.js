var express = require('express');
var router = express.Router();
var Student = require('../models/students');
var Teacher = require('../models/teacher');
var Class = require('../models/class');


//Get
router.get('/', function(req, res, next) {
    res.send("Admin dashboard");
});

router.get('/class', function(req, res, next) {
    Class.find().populate('teacher').populate('students.sid').exec().then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
});
router.get('/student', function(req, res, next) {
    Student.find().exec().then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
});
router.get('/teacher', function(req, res, next) {
    res.send("list of teachers");
});
router.get('/classes/:id', function(req, res, next) {
    Class.find({ _id: req.params.id }).exec().then(docs => {
        res.json(docs);
    }
    ).catch(err => {
        return err;
    });
});

//Post
router.post('/addstudent', function(req, res, next) {
    Student.create(req.body).then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
});
router.post('/addteacher', function(req, res, next) {
    Teacher.create(req.body).then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
});
router.post('/addclass', function(req, res, next) {
    Class.create(req.body).then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
});

//Put
router.put('/editstudent/:id', function(req, res, next) {
    res.send("edit student");
});
router.put('/editteacher/:id', function(req, res, next) {
    res.send("edit teacher");
});
router.put('/assignttoc/:id/:tid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, { teacher: req.params.tid }).then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
});
router.put('/assignstoc/:cid/:sid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, { $push: { students: { sid: req.params.sid } } }).then(docs => {
        res.json(docs);
    }).catch(err => {
        return err;
    });
});

//delete
router.delete('/deletestudent/:id', function(req, res, next) {
    res.send("delete student");
});
router.delete('/deleteteacher/:id', function(req, res, next) {
    res.send("delete teacher");
});
router.delete('/deleteclass/:id', function(req, res, next) {
    res.send("delete class");
});
module.exports = router;