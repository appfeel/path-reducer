import { describe, it } from 'mocha';
import { updateImmutableState } from '../';
import immutableState from './immutableState';
import notImmutableState from './notImmutableState';
import generateDoc from './generateDoc';

describe('path-reducer', () => {
    describe('Immutable state:', () => {
        it('updateImmutableState should not mutate the state nor the action', () => {
            // DeepFreeze prevents mutations, so if mutations happens, an error is raised
            updateImmutableState({}, { type: 'doNothing' });
        });
    });

    immutableState();
    notImmutableState();
    generateDoc();
});
