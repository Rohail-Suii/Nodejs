var express = require('express');
var router = express.Router();
var empCont = require('../controllers/emp');
router.get('/', function(req, res, next) {
    res.send("emp router dashboard");
});

router.get('/view', empCont.view);

router.get('/view/:name', empCont.viewName);

router.post('/add', empCont.add);

router.put('/edit/:name',empCont.update);

router.delete('/delete/:name', empCont.delete);

module.exports = router;