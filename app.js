'use strict';

const events = require('./modules/events.js');
// const logger = require('./modules/logger.js');

events.on('emitting-socket', dispatchAction);

/**
 * dispatch
 *
 * @param {*} buffer
 * @param {*} userId
 * @param {*} socketPool
 */
function dispatchAction(buffer, userId, socketPool){
  parse(buffer, userId, socketPool);
}

/**
 *parse
 *
 * @param {*} buffer
 * @param {*} userId
 * @param {*} socketPool
 */
function parse(buffer, userId, socketPool){
  events.emit('parse-buffer', buffer, userId, socketPool);
}



module.exports = {parse, dispatchAction};
