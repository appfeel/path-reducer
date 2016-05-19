import { describe, it } from 'mocha';
import { createStore, applyMiddleware } from 'redux';
import { pathReducer } from '../';
import { createReducerTest, executeCbs } from './helpers';
import { defaultState as objDefaultState, actions as objActions } from './objectState/index';

const subscribedCbs = [];
const fakeObjReducer = (state = objDefaultState, action = {}) => {
    executeCbs(subscribedCbs, state, action);
    // We return original state in order to not mutate it,
    // So every test is done over the same initial state
    return state;
};
export default function executeTest() {
    describe('Not Immutable object state store', () => {
        const store = createStore(fakeObjReducer, applyMiddleware(pathReducer));
        const test = createReducerTest(store, subscribedCbs, objDefaultState);

        it('store should be correctly created with pathReducer middleware', () => {
            createStore(fakeObjReducer, applyMiddleware(pathReducer));
        });

        it(`dispatch ${objActions.doNothing.type} action`, test(objActions.doNothing));
        it(`dispatch ${objActions.doNothingAlt.type} action`, test(objActions.doNothingAlt));
    });

    describe('Not Immutable object state store', () => {
        it('Not yet implemented');
    });

    describe('Not Immutable array state store', () => {
        it('Not yet implemented');
    });
}
