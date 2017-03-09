// Main file to create the store

import {createStore} from 'redux';
import reducer from './reducer';

// Create the store passing the 
// reducer as the argument
export default function makeStore() {
    return createStore(reducer);
}