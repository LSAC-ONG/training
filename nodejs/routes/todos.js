const express = require('express');
const { callbackify } = require('util');
const tasks = require('../models/task');
const router = express.Router();
const Task = require('../models/task');
const reqAuth = require('../config/safeRoutes').reqAuth;

// route /api/todo

// CRUD API -> create, read, update, delete

// /api/todo/all
router.post('/all', reqAuth, function(req, res) {
    Task.find({}, function(err, tasks) {
        if (err) {
            console.log("error at todo all: " + err);
            return res.json({success: false});
        }
        return res.json({success: true, tasks: tasks});
    });
});


// /api/todo/add
router.post('/add', reqAuth, function(req, res) {
    const { title } = req.body;
    // identic cu ce e mai sus
    //const title = req.body.title;

    const task = { title: title };

    if (!title) {
        return res.json({success: false});
    }

    Task.create(task, function(err, resp) {
        if (err) {
            return res.json({success: false});
        }
        return res.json({success: true});
    });
});


// /api/todo/delete
router.post('/delete', reqAuth, function(req, res) {
    const { taskID } = req.body;

    if (!taskID) {
        return res.json({success: false});
    }
    
    Task.deleteMany({ _id: taskID }, function(err, taskResp) {
        if (err) {
            return res.json({success: false});
        }
        return res.json({success: true});
    })
})

// /api/todo/edit
router.post('/edit', reqAuth, function(req, res) {
    const { taskID, done, title } = req.body;

    if (!taskID) {
        return res.json({success: false});
    }

    const query = { _id: taskID };
    const newValues = {$set: {}};

    if (done) {
        newValues.$set.done = done;
    }

    if (title) {
        newValues.$set.title = title;
    }

    Task.updateOne(query, newValues, function(err, resp) {
        if (err) {
            return res.json({success: false});
        }
        return res.json({success: true});
    });
});


module.exports = router;
