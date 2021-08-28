const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid').v4
const getRandomImage = require('./miscelanious/images')


const  app = express();
const port = 5000;

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

/*
users =[{
            username,
            id,
            profile_picture
       },...
       ]
 */
let users = [{
    username:"General",
    id:'',
    profile_picture: getRandomImage()
}];

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/signin', (req, res) =>{
    // console.log(req.body)
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
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const new_user_event = "newUser"

io.on("connection", (socket) => {

    // Join a conversation
    const { roomId } = socket.handshake.query;
    console.log(roomId)
    socket.join(roomId);

    io.emit("users_list_fetched", users)
    // console.log(socket.id)

    // Listen for new messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
        console.log(data)
        if(data.body.room_id === '')
            io.emit(NEW_CHAT_MESSAGE_EVENT, data);
        else{
            io.to(data.body.room_id).emit(NEW_CHAT_MESSAGE_EVENT, data)
            io.to(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data)
        }
    });


    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
        Console.log(`${socket.id} left room ${roomId}`)
        socket.leave(roomId);
        users = users.filter((user) =>{
            return user.id !== roomId
        })
        io.emit("users_list_fetched", users)
    });
});
server.listen(port,()=>{
    console.log(`Listening on ${port}`)
})