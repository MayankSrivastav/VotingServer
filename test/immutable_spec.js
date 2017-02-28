import { expect } from 'chai';

describe('immutablity', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }

        if('is immutable', () => {
            let state = 42;
            let nextState = increment(state);
            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });
    });
});