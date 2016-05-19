import { describe, it } from 'mocha';
import { createStore } from 'redux';
import { createReducerTest, executeCbs } from './helpers';
import { defaultState as objDefaultState, actions as objActions } from './objectState/index';

const subscribedCbs = [];
const objReducer = (state = objDefaultState, action = {}) => {
    executeCbs(subscribedCbs, state, action);
    // We return original state in order to not mutate it,
    // So every test is done over the same initial state
    return state;
};
export default function executeTest() {
    describe('Not Immutable object state store', () => {
        const store = createStore(objReducer);
        const test = createReducerTest(store, subscribedCbs, objDefaultState);

        it(`dispatch ${objActions.doNothing.type} action`, test(objActions.doNothing));
        it(`dispatch ${objActions.doNothingAlt.type} action`, test(objActions.doNothingAlt));
    });

    describe('Not Immutable object state store', () => {
        it('Not yet implemented');
    });

    describe('Not Immutable array state store', () => {
        it('Not yet implemented');
    });

    describe('Not Immutable object state store with pathReducer wrapper', () => {
        it('Not yet implemented');
    });

    describe('Not Immutable array state store with pathReducer wrapper', () => {
        it('Not yet implemented');
    });
}
