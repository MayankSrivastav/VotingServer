// Main server file to initiate server

import Server from 'socket.io';

// Export startServer function to be
// used by other modules
export default function startServer() {
    const io = new Server().attach(8090);
}

// Subscribe to the store to get the state
// changes
store.subscribe(
    () => io.emit('state', store.getState().toJS())
);

io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
});