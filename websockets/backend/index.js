const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid').v4
const getRandomImage = require('./miscelanious/images')

const  app = express();
const port = 5000;
/*
users =[{
            username,
            id,
            profile_picture
       },...
       ]
 */
let users = [];

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/signin', (req, res) =>{
    console.log(req.body)
    let username = req.body.username;
    let id = uuid();
    let profile_picture = getRandomImage();
    users.push({
        username,
        id,
        profile_picture
    })
    res.send({username, id, profile_picture})
})
app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})