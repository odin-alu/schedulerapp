exports.landing_page = function(req, res) {
    // db.init();
    db.getAllEntries().then((list) => {
        res.render('../views/ entries.mustache', {
            'title': 'Courseworks',
            'entries': list
        });
        console.log('promise resolved');
    }).catch((err) => {
        console.log('promise rejected', err);
    })
}

exports.add = function(req, res) {
    db.init();
    db.getAllEntries().then((list) => {
        res.render('../views/ entries.mustache', {
            'title': 'Courseworks',
            'entries': list
        });
        console.log('promise resolved');
    }).catch((err) => {
        console.log('promise rejected', err);
    })
}

exports.update = function (req, res) {
    res.send('<h1>Processing Courseworks, see terminal</h1>');
    db.getUpdate();
}

exports.cw_title = function (req, res) {
    res.send('<h1>Processing Courseworks, see terminal</h1>');
    db.getCourseworkTitle();
}

const schedulerDAO = require('../models/schedulerModel.js');

const db = new schedulerDAO();