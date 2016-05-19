import { assert } from 'chai';
import { getObjectValueByPath, updateImmutableState } from '../';

// This helper function lets us execute all subscribed callback for a test
export const executeCbs = (subscribedCbs, state, action) => {
    let cb = subscribedCbs.shift();
    let nextState = state;
    while (cb) {
        nextState = cb.call(this, nextState, action) || nextState;
        cb = subscribedCbs.shift();
    }
};

export const createReducerTest =
    (store, subscribedCbs, defaultState, isUseUpdateImmutableStateReducer = true) =>
        (testedAction) => (done) => {
            // The functions that will be executed in our reducer
            if (isUseUpdateImmutableStateReducer) {
                subscribedCbs.push(updateImmutableState);
            }
            // Our test function
            subscribedCbs.push((nextState) => {
                if (!testedAction.meta || /^doNothing/i.test(testedAction.type)) {
                    assert.equal(JSON.stringify(nextState), JSON.stringify(defaultState));
                } else {
                    const path = testedAction.meta.slice(0);
                    const stateJs = nextState.toJS();
                    const real = getObjectValueByPath(stateJs, path);
                    let expected = getObjectValueByPath(testedAction.payload, path, true);
                    let statePtr = nextState;
                    let p;

                    // console.log('');
                    // console.log('*************************');
                    // console.log('nextState:', nextState);
                    // console.log('path:', path);
                    // console.log('state:', stateJs);
                    // console.log('testedAction.payload:', testedAction.payload);
                    for (p = 0; p < path.length; p += 1) {
                        assert(statePtr.has(path[p]), `state doesn't contain [${path}]`);
                        if (p < path.length - 1) {
                            statePtr = statePtr.get(path[p]);
                        }
                    }
                    assert(nextState.hasIn(path), `state doesn't contain [${path}]`);

                    while (expected === undefined && path.length > 0) {
                        path.shift();
                        expected = getObjectValueByPath(testedAction.payload, path);
                    }

                    // console.log('real:', real);
                    // console.log('expected:', expected);
                    // console.log('');
                    assert.equal(
                        JSON.stringify(real),
                        JSON.stringify(expected)
                    );
                }
                done();
            });

            // Dispatch the action
            store.dispatch(testedAction);
        };
