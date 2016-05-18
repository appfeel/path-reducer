import { describe, it } from 'mocha';
import { assert } from 'chai';
import fs from 'fs';
import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { pathReducer } from '../';
import { executeCbs } from './helpers';
import { defaultState as objDefaultState, actions as objActions } from './objectState/index';
import { defaultState as arrDefaultState, actions as arrActions } from './arrayState/index';
import { updateImmutableState } from '../';

const subscribedCbs = [];
const immObjDefaultState = Immutable.fromJS(objDefaultState); // Immutable state
const immArrDefaultState = Immutable.fromJS(arrDefaultState); // Immutable state
const fakeObjReducer = (state = immObjDefaultState, action) => {
    executeCbs(subscribedCbs, state, action);
    // We return original state in order to not mutate it,
    // So every test is done over the same initial state
    return state;
};
const fakeArrReducer = (state = immArrDefaultState, action) => {
    executeCbs(subscribedCbs, state, action);
    // We return original state in order to not mutate it,
    // So every test is done over the same initial state
    return state;
};
const head = `# Cases
Here you can find the diferent cases where you can modify the state with a path.

`;
let log = '';

function underscored(s) {
    return s.trim().replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function humanize(s) {
    return capitalize(underscored(s).replace(/_id$/, '').replace(/_/g, ' '));
}

function generateDocType(type, actions, fakeReducer) {
    const store = createStore(fakeReducer, applyMiddleware(pathReducer));
    const logStates = (initialStateStr) => (nextState) => {
        log += '<table>\n';
        log += '  <tr>';
        log += '    <th>Initial store state:</th>';
        log += '    <th>Next store state:</th>';
        log += '  </tr>';
        log += '  <tr>';
        log += '    <th>';
        log += '```json\n';
        log += `${initialStateStr}\n`;
        log += '```\n';
        log += '    </th>';
        log += '    <th>';
        log += '```json\n';
        log += `${JSON.stringify(nextState.toJS(), null, 4)}\n`;
        log += '```\n';
        log += '    </th>';
        log += '  </tr>';
        log += '</table>\n';
        // log += '<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">\n';
        // log += '  <div style="display: inline-block;">\n';
        // log += 'Initial store state:\n\n';
        // log += '```json\n';
        // log += `${initialStateStr}\n`;
        // log += '```\n';
        // log += '  </div>\n';
        // log += '  <div style="display: inline-block;">\n';
        // log += 'Next store state:\n\n';
        // log += '```json\n';
        // log += `${JSON.stringify(nextState.toJS(), null, 4)}\n`;
        // log += '```\n';
        // log += '  </div>\n';
        // log += '</div>\n';
    };
    let action;

    log += `## ${type} store state\n`;
    // log += `### Initial store state:\n`;
    // logObject('The initial store state will be the following one for every case below:')(
    //     store.getState()
    // );

    for (action in actions) {
        if (actions.hasOwnProperty(action)) {
            const initialState = JSON.stringify(store.getState().toJS(), null, 4);
            subscribedCbs.push(updateImmutableState);
            log += `### ${humanize(actions[action].type)} action\n`;
            log += `Dispatched action: ${actions[action].type}:\n\n`;
            log += '```javascript\n';
            log += `store.dispatch(${JSON.stringify(actions[action], null, 4)});\n`;
            log += '```\n';
            log += '\n';
            subscribedCbs.push(logStates(initialState));
            store.dispatch(actions[action]);
        }
    }
}

export default function generateDoc() {
    describe('Generate documentation', () => {
        it('should generate documentation for every tested case', (done) => {
            fs.truncateSync('./CASES.md', 0);
            const ws = fs.createWriteStream('./CASES.md');
            ws.on('error', (err) => {
                assert(false, err);
            });
            ws.on('finish', () => {
                done();
            });
            generateDocType('Object', objActions, fakeObjReducer);
            generateDocType('Array', arrActions, fakeArrReducer);
            // console.log(log);
            ws.write(head);
            ws.write(log);
            ws.end();
        });
    });
}
