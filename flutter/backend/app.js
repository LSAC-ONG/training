const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const compression = require('compression');
const mongoURI = require('./config/keys').mongoURI;
const passport = require('passport');

// configure .env
require('dotenv').config();

const app = express();

app.use(compression());

// passport sessions config
require('./config/passport')(passport);

// database connection
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("MONGO CONNETED"))
    .catch((err) => console.log("MONGO ERR:" + err));

app.use(cors());

// app.use(requireHTTPS());

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// initialize routes
app.use('/api/users', require('./routes/users.js'));

const PORT = process.env.PORT;

https.createServer({
    key: fs.readFileSync(process.env.SSLKEY),
    cert: fs.readFileSync(process.env.SSLCERT),
}, app)
    .listen(PORT, function() {
        console.log('App listening on port ' + PORT + '! Go to https://localhost:' + PORT + '/');
    });

app.enable('trust proxy');

app.use(function(req, res, next) {
    if (req.secure) {
        return next();
      }
    res.redirect('https://' + req.headers.host + req.url);
})
