const nedb = require('nedb');

class Scheduler {
    constructor(dbFilePath) {
        this.db = new nedb({
            filename: 'gb.db',
            autoload: true
        });
        console.log('DB connected to ' + dbFilePath);
    }

    init() {
        this.db.insert({
            "cw_title": "Recommender System",
            "mod_title": "Big Data",
            "mod_level": 4,
            "milestones": [
                "Test Data",
                "Algorithms",
                "Reports"
            ],
            "int_due_date": "29-11-20",
            "act_due_date": "09-12-20",
            "status": "active"
        });
        //for later debugging
        // console.log('db entry RS inserted');
        // this.db.insert({
        //     "cw_title": "SafeDel",
        //     "mod_title": "SysProg",
        //     "mod_level": 3,
        //     "milestones": [
        //         "safedel script",
        //         "monitor script",
        //         "manual"
        //     ],
        //     "int_due_date": "09-12-20",
        //     "act_due_date": "14-12-20",
        //     "status": "completed"
        // });
        // console.log('db entry SD inserted');
    }
    //a function to return all entries from the database
    getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}, function(err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', entries);
                }
            })
        })
    }

    getCourseworkTitle() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //find(cw_title:'Prototyping) retrieves the data,
            //with error first callback function, err=error, entries=data
            this.db.find({
                cw_title: 'Prototyping'
            }, function(err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise and return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('getCourseworkTitle() returns: ', entries);
                }
            })
        })
    }

    getUpdate() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //find(cw_title:'Prototyping & update) retrieves the data,
            //with error first callback function, err=error, entries=data
            this.db.update({
                cw_title: 'Prototyping'
            },{$push : {'milestones': {$each: ['task1', 'task2', 'task3']}}}, function(err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise and return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('getUpdate() returns: ', entries);
                }
            })
        })
    }
}



module.exports = Scheduler;