const ActiveSession = require('../models/activeSession');

const reqAuth = (req, res, next) => {
    const token = String(req.headers.authorization);
    console.log("token: " + token);
    ActiveSession.find({token: token}, function(err, session) {
        console.log(session);
        if (session.length == 1) {
            return next();
        } else {
            return res.json({success: false, msg: 'User is not logged on'});
        }
    })
}

module.exports = {
    reqAuth: reqAuth,
  };