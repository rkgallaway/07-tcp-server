'use strict';

// First Party Modules
const net = require('net');

// Third Party Modules
const uuid = require('uuid/v4');

const port = process.env.PORT || 3001;
const server = net.createServer();
const socketPool = {};
const commands = {};

//modules
const app = require('./app.js');
const logger = require('./modules/logger.js');
const events = require('./modules/events.js');


server.on('connection', (socket) => {
  let id = uuid();
  socketPool[id] = {
    id:id,
    nickname: `User-${id}`,
    socket: socket,
  };
  socket.on('data', (buffer) => events.emit('emitting-socket', buffer, id, socketPool));
});

server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});
