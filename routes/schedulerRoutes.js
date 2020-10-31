const express = require('express');
const router = express.Router();
const controller = require('../controllers/schedulerControllers.js');
module.exports = router;

router.get('/', controller.landing_page);
// router.get('/add', controller.add);
// router.get('/update', controller.update);

// router.get('/guestbook', controller.entries_list);

// router.get('/new', controller.new_entry);

// router.get('/about', function(req, res) {
//     res.redirect('../public/about.html');
// });

router.get('/courseworkTitle', controller.cw_title);
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

// <div>
// Written by {{author}} , on {{published}}
// </div>