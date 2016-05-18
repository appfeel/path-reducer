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

function logStates(initialStateStr) {
    return (nextState) => {
        log += '<table>\n';
        log += '<tr>';
        log += '<th>Initial store state:</th>';
        log += '<th>Next store state:</th>';
        log += '</tr>';
        log += '<tr>';
        log += '<td>';
        log += '<pre lang="json">\n';
        log += `${initialStateStr}\n`;
        log += '</pre>';
        log += '</th>';
        log += '<td>';
        log += '<pre lang="json">\n';
        log += `${JSON.stringify(nextState.toJS(), null, 4)}\n`;
        log += '</pre>';
        log += '</td>';
        log += '</tr>';
        log += '</table>\n\n';
    };
}

function generateDocType(type, actions, fakeReducer) {
    const store = createStore(fakeReducer, applyMiddleware(pathReducer));
    let action;

    log += `## ${type} store state\n\n`;
    for (action in actions) {
        if (actions.hasOwnProperty(action)) {
            const initialState = JSON.stringify(store.getState().toJS(), null, 4);
            subscribedCbs.push(updateImmutableState);
            log += `### ${humanize(actions[action].type.replace(/_/g, ''))} action\n`;
            log += `Dispatched action: \`${actions[action].type}\`\n\n`;
            log += '```javascript\n';
            log += `store.dispatch(${JSON.stringify(actions[action], null, 4)});\n`;
            log += '```\n';
            log += '\n';
            subscribedCbs.push(logStates(initialState));
            store.dispatch(actions[action]);
        }
    }
}

function generateDocIndex(type, actions) {
    let action;
    log += `- [${type} store state](https://github.com/appfeel/path-reducer/blob/master/CASES.md#${type.toLowerCase()}-store-state)\n`;

    for (action in actions) {
        if (objActions.hasOwnProperty(action)) {
            const caseLink = humanize(objActions[action].type.replace(/_/g, ''));
            const caseLinkAnchor = caseLink.replace(/\s/g, '-').toLowerCase();
            log += `  - [${caseLink}](https://github.com/appfeel/path-reducer/blob/master/CASES.md#${caseLinkAnchor}-action)\n`;
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

            generateDocIndex('Object', objActions);
            generateDocIndex('Array', arrActions);
            log += '\n';
            generateDocType('Object', objActions, fakeObjReducer);
            generateDocType('Array', arrActions, fakeArrReducer);
            // console.log(log);
            ws.write(head);
            ws.write(log);
            ws.end();
        });
    });
}
