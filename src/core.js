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
    const entries = state.get('entries')
                         .concat(getWinners(state.get('vote')));
    if (entries.size === 1) {
        return state.remove('vote')
                    .remove('entries')
                    .set('winner', entries.first());
    } else {
        return state.merge({
            vote: Map({pair: entries.take(2)}),
            entries: entries.skip(2)
        });
    }
}

export function vote(voteState, entry) {
    return voteState.updateIn(
        ['tally', entry],
        0,
        tally => tally + 1
    );
}
