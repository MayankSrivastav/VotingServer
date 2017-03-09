// Index file to start the operations

import makeStore from './src/store';
import startServer from './src/server';

// Make the store
export const store = makeStore();

// Start the server with store
startServer(store);

// Dispatch SET_ENTRIES action
store.dispatch({
    type: 'SET_ENTRIES',
    entries: require('../entries.json')
});

store.dispatch({type: 'NEXT'});