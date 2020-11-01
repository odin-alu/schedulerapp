const express = require('express');
const router = express.Router();
const controller = require('../controllers/schedulerControllers.js');
module.exports = router;


router.get('/', controller.landing_page);

router.get('/status', controller.status);
router.get('/add', controller.add);
router.get('/update', controller.update);

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})

router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})
