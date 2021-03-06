// Main functions for core functionalities

import {List, Map} from 'immutable';

// Initial state when there is no
// state defined for reducer
export const INITIAL_STATE = Map();

// Function to get the winners from 
// the current vote
function getWinners(vote) {
    if (!vote) return [];
    const [a, b] = vote.get('pair');
    const aVotes = vote.getIn(['tally', a], 0);
    const bVotes = vote.getIn(['tally', b], 0);

    if (aVotes > bVotes) return [a];
    if (bVotes > aVotes) return [b];
    return [a, b];
}

// function to set state in the entries
export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}

// Function to calculate the next state
export function next(state) {
    // get the winner based on vote and concatinate
    // it to the entries
    const entries = state.get('entries')
                         .concat(getWinners(state.get('vote')));

    // Return winner, if only one entry
    if (entries.size === 1) {
        return state.remove('vote')
                    .remove('entries')
                    .set('winner', entries.first());
<<<<<<< HEAD
    } else {
        // Otherwise return the merged state
=======
    } else {    // otherwise merge the state
>>>>>>> 147bc16a31f94e333894e09d4d2e33da6b270573
        return state.merge({
            vote: Map({pair: entries.take(2)}),
            entries: entries.skip(2)
        });
    }
}

// Function to update vote
export function vote(voteState, entry) {
    return voteState.updateIn(
        ['tally', entry],
        0,
        tally => tally + 1
    );
}
