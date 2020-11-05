const express = require('express');
const router = express.Router();
const controller = require('../controllers/schedulerControllers.js');
module.exports = router;


router.get('/', controller.landing_page);

// Retrieve only active course-works
router.get('/status', controller.status);
// Add a new course-work
router.get('/add', controller.add);
// Update the field of a course-work
router.get('/update', controller.update);
// Delete a course-work
router.get('/delete', controller.delete);

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
