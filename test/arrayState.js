// import { describe, it } from 'mocha';
// import { pathReducer, updateImmutableState } from '../../';
// import { createReducerTest } from '../helpers';
// import Immutable from 'immutable';
// import deepFreeze from 'deep-freeze';
// import { createStore, applyMiddleware } from 'redux';
// // const subscribedOCbs = [];
// const subscribedICbs = [];
// const defaultOStateObject = { // Ordinary state (non immutable)
//     foo: 1,
//     bar: {
//         boo: 10,
//         bla: 15,
//     },
//     lee: [
//         {
//             too: {
//                 tar: 10,
//                 liq: 15,
//             },
//         },
//         {
//             tea: {
//                 tee: 23,
//                 bea: 44,
//             },
//         },
//         {
//             pot: {
//                 cat: 23,
//                 dob: 44,
//             },
//         },
//     ],
// };

// // const fakeOReducer = (state = defaultOState, action) => {
// //     executeCbs(subscribedOCbs, state, action);
// //    // We return original state in order to not mutate it,
// //    // So every test is done over the same initial state
// //     return state;
// // };
// const defaultIState = Immutable.fromJS(defaultOStateObject); // Immutable state
// const fakeIReducer = (state = defaultIState, action) => {
//     executeCbs(subscribedICbs, state, action);
//     // We return original state in order to not mutate it,
//     // So every test is done over the same initial state
//     return state;
// };
// const actions = {
//     doNothing: {
//         type: 'doNothing',
//     },
//     updateElement: {
//         type: 'updateElement',
//         meta: ['foo'],
//         payload: {
//             foo: 2,
//         },
//     },
//     addNonExistngElement: {
//         type: 'addNonExistngElement',
//         meta: ['kaw'],
//         payload: {
//             kaw: 2,
//         },
//     },
//     addNonExistngObjectElement: {
//         type: 'addNonExistngObjectElement',
//         meta: ['bar', 'kaw'],
//         payload: {
//             kaw: 15,
//         },
//     },
//     updateInnerObjectElement: {
//         type: 'updateInnerObjectElement',
//         meta: ['bar', 'boo'],
//         payload: {
//             boo: 15,
//         },
//     },
//     updateObjectElement: {
//         type: 'updateObjectElement',
//         meta: ['bar'],
//         payload: {
//             bar: {
//                 boo: 20,
//                 bla: 20,
//             },
//         },
//     },
//     addNonExistingElementToArray: {
//         type: 'addNonExistingElementToArray',
//         meta: ['lee', 0, 'brr'],
//         payload: {
//             brr: 10,
//         },
//     },
//     deleteArrayElement: {
//         type: 'deleteArrayElement',
//         meta: ['lee', 1],
//         payload: {
//             lee: [
//                 {
//                     too: {
//                         tar: 10,
//                         liq: 15,
//                     },
//                 },
//                 {
//                     pot: {
//                         cat: 23,
//                         dob: 44,
//                     },
//                 },
//             ],
//         },
//     },
//     changeArrayElement: {
//         type: 'changeArrayElement',
//         meta: ['lee', 1],
//         payload: {
//             lee: [
//                 {
//                     too: {
//                         tar: 10,
//                         liq: 15,
//                     },
//                 },
//                 {
//                     kep: {
//                         col: 23,
//                         fea: 44,
//                     },
//                 },
//                 {
//                     pot: {
//                         cat: 23,
//                         dob: 44,
//                     },
//                 },
//             ],
//         },
//     },
//     addArrayElement: {
//         type: 'addArrayElement',
//         meta: ['lee', 1],
//         payload: {
//             lee: [
//                 {
//                     too: {
//                         tar: 10,
//                         liq: 15,
//                     },
//                 },
//                 {
//                     kep: {
//                         col: 23,
//                         fea: 44,
//                     },
//                 },
//                 {
//                     tea: {
//                         tee: 23,
//                         bea: 44,
//                     },
//                 },
//                 {
//                     pot: {
//                         cat: 23,
//                         dob: 44,
//                     },
//                 },
//             ],
//         },
//     },
//     updateInnerArrayElement: {
//         type: 'updateInnerArrayElement',
//         meta: ['lee', 0, 'too', 'tar'],
//         payload: {
//             tar: 15,
//         },
//     },
//     updateArrayElement: {
//         type: 'updateArrayElement',
//         meta: ['lee', 0, 'too'],
//         payload: {
//             too: 10,
//         },
//     },
//     addNonExistingArray: {
//         type: 'addNonExistingElementToArray',
//         meta: ['lee', 2, 'brr'],
//         payload: {
//             brr: 10,
//         },
//     },
// };
// // let oStore;
// let iStore;


// deepFreeze(defaultOStateObject);
// deepFreeze(defaultIState);
// deepFreeze(actions);

// export function exeucte() {
//     describe('Immutable state:', () => {
//         it('updateImmutableState should not mutate the state nor the action', () => {
//             // DeepFreeze prevents mutations, so if mutations happens, an error is raised
//             updateImmutableState(defaultIState, actions.doNothing);
//         });
//     });

//     /**
//         TODO: not yet implemented
//         describe('Dispatch on an ordinary (non immutable state) store:', () => {
//             it('a non immutable state should be accepted', () => {
//                 oStore = createStore(fakeOReducer, applyMiddleware(pathReducer));
//             });
//         });
//     */

//     describe('Dispatch on an immutable object state store:', () => {
//         let action;

//         it('store should be correctly created with pathReducer middleware', () => {
//             iStore = createStore(fakeIReducer, applyMiddleware(pathReducer));
//         });

//         for (action in actions) {
//             if (actions.hasOwnProperty(action)) {
//                 it(`dispatch ${actions[action].type} action`, createReducerTest(actions[action]));
//             }
//         }
//     });
// }
