import { describe, it } from 'mocha';
import Immutable from 'immutable';
import deepFreeze from 'deep-freeze';
import { createStore } from 'redux';
import { createReducerTest, executeCbs } from './helpers';
import { defaultState as objDefaultState, actions as objActions } from './objectState/index';
import { defaultState as arrDefaultState, actions as arrActions } from './arrayState/index';
import { pathReducer } from '../';

const subscribedCbs = [];
const immObjDefaultState = Immutable.fromJS(objDefaultState); // Immutable state
const immArrDefaultState = Immutable.fromJS(arrDefaultState); // Immutable state
const objReducer = (state = immObjDefaultState, action = {}) => {
    executeCbs(subscribedCbs, state, action);
    // We return original state in order to not mutate it,
    // So every test is done over the same initial state
    return state;
};
const arrReducer = (state = immArrDefaultState, action = {}) => {
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
        const store = createStore(objReducer);
        const test = createReducerTest(store, subscribedCbs, immObjDefaultState);
        let action;

        for (action in objActions) {
            // test(..) ensures the state is defaultState before each dispatch
            if (objActions.hasOwnProperty(action)) {
                it(`dispatch ${objActions[action].type} action`, test(objActions[action]));
            }
        }
    });

    describe('Immutable array state store', () => {
        const store = createStore(arrReducer);
        const test = createReducerTest(store, subscribedCbs, immArrDefaultState);
        let action;

        for (action in arrActions) {
            // test(..) ensures the state is defaultState before each dispatch
            if (arrActions.hasOwnProperty(action)) {
                it(`dispatch ${arrActions[action].type} action`, test(arrActions[action]));
            }
        }
    });

    describe('Immutable object state store with pathReducer wrapper', () => {
        let action;

        it('store should be correctly created with pathReducer wrapper', () => {
            createStore(pathReducer(objReducer));
        });

        for (action in objActions) {
            if (objActions.hasOwnProperty(action)) {
                // We need to recreate store as the state is being modified after each dispatch
                const store = createStore(pathReducer(objReducer));
                const test = createReducerTest(store, subscribedCbs, immObjDefaultState, false);
                it(`dispatch ${objActions[action].type} action`, test(objActions[action]));
            }
        }
    });

    describe('Immutable array state store with pathReducer wrapper', () => {
        let action;

        it('store should be correctly created with pathReducer wrapper', () => {
            createStore(pathReducer(objReducer));
        });

        for (action in arrActions) {
            if (arrActions.hasOwnProperty(action)) {
                // We need to recreate store as the state is being modified after each dispatch
                const store = createStore(pathReducer(arrReducer));
                const test = createReducerTest(store, subscribedCbs, immArrDefaultState, false);
                it(`dispatch ${arrActions[action].type} action`, test(arrActions[action]));
            }
        }
    });
}
