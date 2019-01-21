'use strict';

const logger = require('./logger.js');
const events = require('./events.js');
const commands = {};


commands['@all'] =  (data, userId, socketPool) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

commands['@nick'] =  (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
};


commands['@quit'] = (data, userId, socketPool) => {
  socketPool[userId] = null;
};



commands['@dm'] = (data, userId, socketPool) => {
  for(let connection in socketPool){
    let user = socketPool[connection];
    if(user.nickname === data.target){
      user.socket.write(`<<<${socketPool[userId]}.nickname>>> ${data.message}\n`);
    }
  }
};

events.on('@dm', commands['@dm']);

module.exports = {commands};