
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
});

//Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });

//Raise: logging (data: message)
emitter.emit('messageLogging', { id: 2, url: ' ' });