import {setEntries, next, vote, INITIAL_STATE} from './core';

// Figure out which function to call and call it
export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_ENTRIES': // Call SET_ENTRIES action
            return setEntries(state, action.entries);
        case 'NEXT': // Call NEXT action
            return next(state);
        case 'VOTE':
            return state.update('vote',
                                voteState => vote(voteState, action.entry));
    }
    return state;
}