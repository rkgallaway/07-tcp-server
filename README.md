![CF](http://i.imgur.com/7v5ASc8.png) LAB 07
=================================================

## ab 07 TCP Serer

### Author: Ryan Gallaway
#### collaborated with / helped by Becca Lee and Heather Cherewaty -functionality was a challenge on windows machine

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/07-tcp-server.svg?branch=master)](https://www.travis-ci.com/rkgallaway/07-tcp-server)

* [repo](https://github.com/rkgallaway/07-tcp-server)
* [travis](https://www.travis-ci.com/rkgallaway/07-tcp-server)
* [server](https://lab-07-tcp-server.herokuapp.com)

### Modules
#### `commands.js` -chat commands
#### `events.js` -emit events
#### `logger.js` -dispatch and parse functionality

##### Exported Values and Methods

## Assignment
Refactor the provided application using best practices for modularization, events, test-ability

## Requirements 
Refactor the provided chat server code as follows ...
* Ensure that every function has JSDoc Notation
* Convert to the use of events to trigger actions
* Create a TCP Server using the NodeJS `net` module
* Modularize the parser and socket pool into separately loadable (and test-able) modules
* Modularize the actions into separately loadable (and test-able) modules
  * You can use a node module called 'require-directory' to read those in all at once.
* Create a Client constructor module that models an individual connection 
  * Each client instance should contain (at least) `id`, `nickname`, and `socket` properties
* Clients should be able to send messages to all other clients by sending it to the server
* Clients should be able to run special commands by sending messages that start with a command name which in-turn emit an event that is handled by an action module.
  * `@all` to send a message to all users
  * `@quit` to disconnect
  * `@list` to list all connected users
  * `@nickname <new-name>` to change their nickname
  * `@dm <to-username> <message>` to send a message directly to another user by their nickname
* Connected clients should be maintained in an in-memory collection (array) called the `socketPool`
  * When a socket emits the `close` event, the socket should be removed from the client pool
  * When a socket emits the `error` event, the error should be logged on the server
  * When a socket emits the `data` event, the data should be logged on the server and the commands below should be implemented

### Setup
#### `.env` requirements
* `PORT` - Port described in ENV

#### Running the app
* terminal 1: `nodemon`
* terminal 2: nc localhost:3001 (for each user)


#### Tests
* `npm test` -tests not required for this assignment

