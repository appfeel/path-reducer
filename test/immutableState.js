import { describe, it } from 'mocha';
import Immutable from 'immutable';
import deepFreeze from 'deep-freeze';
import { createStore, applyMiddleware } from 'redux';
import { pathReducer } from '../';
import { createReducerTest, executeCbs } from './helpers';
import { defaultState as objDefaultState, actions as objActions } from './objectState/index';
import { defaultState as arrDefaultState, actions as arrActions } from './arrayState/index';

const subscribedCbs = [];
const immObjDefaultState = Immutable.fromJS(objDefaultState); // Immutable state
const immArrDefaultState = Immutable.fromJS(arrDefaultState); // Immutable state
const fakeObjReducer = (state = immObjDefaultState, action = {}) => {
    executeCbs(subscribedCbs, state, action);
    // We return original state in order to not mutate it,
    // So every test is done over the same initial state
    return state;
};
const fakeArrReducer = (state = immArrDefaultState, action = {}) => {
    executeCbs(subscribedCbs, state, action);
    // We return original state in order to not mutate it,
    // So every test is done over the same initial state
    return state;
};

deepFreeze(immObjDefaultState);
deepFreeze(immArrDefaultState);
deepFreeze(objActions);
deepFreeze(arrActions);

export default function executeTest() {
    describe('Immutable object state store', () => {
        const store = createStore(fakeObjReducer, applyMiddleware(pathReducer));
        const test = createReducerTest(store, subscribedCbs, immObjDefaultState);
        let action;

        it('store should be correctly created with pathReducer middleware', () => {
            createStore(fakeObjReducer, applyMiddleware(pathReducer));
        });

        for (action in objActions) {
            if (objActions.hasOwnProperty(action)) {
                it(`dispatch ${objActions[action].type} action`, test(objActions[action]));
            }
        }
    });

    describe('Immutable array state store', () => {
        const store = createStore(fakeArrReducer, applyMiddleware(pathReducer));
        const test = createReducerTest(store, subscribedCbs, immArrDefaultState);
        let action;

        it('store should be correctly created with pathReducer middleware', () => {
            createStore(fakeArrReducer, applyMiddleware(pathReducer));
        });

        for (action in arrActions) {
            if (arrActions.hasOwnProperty(action)) {
                it(`dispatch ${arrActions[action].type} action`, test(arrActions[action]));
            }
        }
    });
}
