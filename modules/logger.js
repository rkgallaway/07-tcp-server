'use strict';

const events = require('./events.js');
const action = require('./commands.js');

events.on('parse-buffer', parseBuffer);
events.on('accept-buffer', dispatchCommand);

/**
 * buffer parser
 *
 * @param {*} buffer
 * @param {*} userId
 * @param {*} socketPool
 * @returns
 */
function parseBuffer(buffer,userId,socketPool){
  let text = buffer.toString().trim();
  if(!text.startsWith('@')){
    return null;
  }
  let [command,payload] = text.split(/\s+(.*)/);
  let [target,message] = payload.split(/\s+(.*)/);
  events.emit('accept-buffer', {command,payload,target,message}, userId, socketPool);
}

/**
 * command dispatch
 *
 * @param {*} entry
 * @param {*} userId
 * @param {*} socketPool
 */
function dispatchCommand(entry,userId,socketPool){
  if(entry && typeof action.commands[entry.command] === 'function'){
    action.commands[entry.command](entry,userId,socketPool);
  }
}

module.exports = {parseBuffer, dispatchCommand};