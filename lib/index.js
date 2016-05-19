/* eslint eqeqeq: 1 */
import Immutable from 'immutable';

function isInt(x) {
    const y = parseInt(x, 10);
    // == as we ar just looking for numbers, not types
    return !isNaN(y) && x == y && x.toString() == y.toString();
}

const isImmutable = (obj) =>
    typeof obj.getIn === 'function' &&
    typeof obj.remove === 'function' &&
    // typeof obj.insert === 'function' &&
    typeof obj.hasIn === 'function' &&
    typeof obj.setIn === 'function';

export function getObjectValueByPath(obj, path) {
    const mutablePath = path.slice(0);
    let currPath;
    let result = obj;

    while (mutablePath.length > 0) {
        currPath = mutablePath.shift();
        if (result !== undefined) { // && result[currPath] !== undefined) {
            result = result[currPath];
        } else {
            result = undefined;
            break;
        }
    }

    return result;
}

export function updateImmutableState(state, action) {
    if (Object.prototype.toString.call(action.meta) !== '[object Array]'
        || action.payload === undefined
        || !isImmutable(state)) {
        return state;
    }

    const stateMutablePath = action.meta.slice(0);
    const dataMutablePath = action.meta.slice(0);
    const lastPathKey = stateMutablePath.pop();
    let nextState;
    let newValue;
    let firstDataValue;
    let stateArr;

    // The action.meta is the full state path
    // Maybe data is just a part of the state tree
    // In that case we move down through the path
    // to find the part of the state tree that is being updated
    //
    // action.meta = ['node2', 'node2.1']
    //
    //          state
    //           /\
    //          /  \
    //      node1  node2        action.payload
    //        /      \              |
    //    node1.1   node2.1       node2.1
    firstDataValue = getObjectValueByPath(action.payload, [dataMutablePath[0]]);
    while (dataMutablePath.length > 0 && firstDataValue === undefined) {
        dataMutablePath.shift();
        // We don't want the updated value, we just need the first element    VVV
        firstDataValue = getObjectValueByPath(action.payload, [dataMutablePath[0]]);
    }

    // Sinchronize dataMutablePath with stateMutablePath
    dataMutablePath.pop();
    if (isInt(lastPathKey)) {
        // The element being changed is an array
        newValue = getObjectValueByPath(action.payload, dataMutablePath);
        stateArr = state.getIn(stateMutablePath);
        if (stateArr && stateArr.size >= 0) {
            // List adding, removing, reordering or element replacing, just pass the new array
            newValue = Immutable.fromJS(newValue);
        } else {
            // Adding a new array
            newValue = new Immutable.List(Immutable.fromJS(newValue));
        }
        nextState = state.setIn(stateMutablePath, newValue);
    } else if (lastPathKey !== undefined) {
        // Push the last element as we want to update the deeper value
        stateMutablePath.push(lastPathKey);
        dataMutablePath.push(lastPathKey);
        // We remove the non existing parts of the path in the state
        // so we can insert all non existing elements in the state
        while (!state.hasIn(stateMutablePath) && stateMutablePath.length > 1) {
            stateMutablePath.pop();
            dataMutablePath.pop();
        }
        newValue = getObjectValueByPath(action.payload, dataMutablePath);
        newValue = Immutable.fromJS(newValue);
        nextState = state.setIn(stateMutablePath, newValue);
    } else {
        // Replace the whole state
        nextState = Immutable.fromJS(action.payload);
    }

    return nextState;
}

export const pathReducer = (reducer) => (state, action) => {
    const nextState = updateImmutableState(state, action);
    return reducer(nextState, action);
};
