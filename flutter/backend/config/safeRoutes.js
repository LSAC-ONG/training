const ActiveSession = require('../models/activeSession');

const reqAuth = (req, res, next) => {
    const token = String(req.headers.authorization);
    ActiveSession.find({token: token}, function(err, session) {
        if (session.length == 1) {
            req.userId = session[0].userId;
            next();
        } else {
            res.json({success: false, msg: 'User is not logged on'});
        }
    })
}

module.exports = {
    reqAuth: reqAuth,
  };
