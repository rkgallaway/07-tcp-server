'use strict';

const logger = require('./logger.js');
const events = require('./events.js');
const commands = {};


/**
 * at all command
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
commands['@all'] =  (data, userId, socketPool) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};

/**
 * create nickname 
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
commands['@nick'] =  (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
};


/**
 *quit chat command
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
commands['@quit'] = (data, userId, socketPool) => {
  socketPool[userId] = null;
};



/**
 *direct message
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
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