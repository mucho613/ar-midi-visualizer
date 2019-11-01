const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 8081;

http.listen(PORT, () => {
  console.log('Running at Port ' + PORT);
});

io.on('connection', function (socket) {
  socket.on('noteOn', function (msg) {
    socket.broadcast.emit('noteOn', msg);
    console.log('Note On: ', msg)
  });
  socket.on('noteOff', function (msg) {
    socket.broadcast.emit('noteOff', msg);
    console.log('Note Off: ', msg)
  });
  socket.on('susteenOn', function () {
    socket.broadcast.emit('susteenOn');
  });
  socket.on('susteenOff', function () {
    socket.broadcast.emit('susteenOff');
  });
});
