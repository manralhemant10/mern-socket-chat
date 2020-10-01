const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const cors = require('cors');
const path = require("path")

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');

const PORT = process.env.PORT || 5000

const app=express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))


io.on('connect', (socket)=>{
    console.log('we have a new connection!');

    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room});

        if(error) return callback(error);

        socket.join(user.room);

        socket.emit('message', {user:'admin', text:`${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name}, has joined!`});

        io.to(user.room).emit('roomData', {room:user.room, users:getUsersInRoom(user.room)});

        callback();
               
    });

    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id);
        io.to(user.room).emit('message', {user:user.name, text:message});
        io.to(user.room).emit('roomData', {user:user.room, users:getUsersInRoom(user.room)});
        
        callback();
    });

    socket.on('disconnect', ()=>{
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`});
        }
    })
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

