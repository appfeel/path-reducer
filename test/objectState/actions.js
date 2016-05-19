import { simpleObject, defaultState } from './defaultState';

export const simpleObjectActions = {
    doNothing: {
        type: 'doNothing',
    },
    doNothingAlt: {
        type: 'doNothingAlt',
        meta: [],
        payload: defaultState,
    },
    // Root elements
    addElement: {
        type: 'addElement',
        meta: ['kaw'],
        payload: {
            kaw: 0,
        },
    },
    updateElement: {
        type: 'updateElement',
        meta: ['foo'],
        payload: {
            foo: 1,
        },
    },
    removeElement: {
        type: 'removeElement',
        meta: [],
        payload: {
            bar: {
                boo: 0,
                bla: 0,
            },
            lee: [
                {
                    too: simpleObject,
                },
                {
                    tea: simpleObject,
                },
                {
                    pot: simpleObject,
                },
            ],
        },
    },
    // removeElementAlt: {
    //     type: 'removeElementAlt',
    //     meta: ['foo'],
    //     payload: undefined,
    // },
    // Object element
    addObject: {
        type: 'addObject',
        meta: ['kaw', 'ree'],
        payload: {
            kaw: {
                ree: 0,
            },
        },
    },
    addElementInObject: {
        type: 'addElementInObject',
        meta: ['bar', 'kaw'],
        payload: {
            kaw: 0,
        },
    },
    addObjectInObject: {
        type: 'addObjectInObject',
        meta: ['bar', 'ree', 'laa'],
        payload: {
            bar: {
                ree: {
                    laa: 1,
                },
            },
        },
    },
    addArrayInObject: {
        type: 'addArrayInObject',
        meta: ['bar', 'ree', 0],
        payload: {
            bar: {
                ree: [
                    {
                        laa: 1,
                    },
                ],
            },
        },
    },
    updateObject: {
        type: 'updateObject',
        meta: ['bar'],
        payload: {
            bar: {
                boo: 1,
                rew: 1,
            },
        },
    },
    updateElementInObject: {
        type: 'updateElementInObject',
        meta: ['bar', 'boo'],
        payload: {
            boo: 1,
        },
    },
    removeObject: {
        type: 'removeObject',
        meta: [],
        payload: {
            foo: 0,
            lee: [
                {
                    too: simpleObject,
                },
                {
                    tea: simpleObject,
                },
                {
                    pot: simpleObject,
                },
            ],
        },
    },
    // removeObjectAlt: {
    //     type: 'removeObjectAlt',
    //     meta: ['bar'],
    //     payload: undefined,
    // },
};

export const arrayActions = {
    // Array element
    addObjectInArray: {
        type: 'addObjectInArray',
        meta: ['lee', 1],
        payload: {
            lee: [
                {
                    too: simpleObject,
                },
                {
                    kep: simpleObject,
                },
                {
                    tea: simpleObject,
                },
                {
                    pot: simpleObject,
                },
            ],
        },
    },
    updateArray: {
        type: 'updateArray',
        meta: ['lee', 1],
        payload: {
            lee: [
                {
                    too: simpleObject,
                },
                {
                    kep: {
                        fer: simpleObject,
                    },
                },
                {
                    pot: simpleObject,
                },
            ],
        },
    },
    removeArray: {
        type: 'removeArray',
        meta: [],
        payload: {
            foo: 0,
            bar: {
                boo: 0,
                bla: 0,
            },
        },
    },
    // removeArrayAlt: {
    //     type: 'removeArrayAlt',
    //     meta: ['lee'],
    //     payload: undefined,
    // },
    removeObjectInArray: {
        type: 'removeObjectInArray',
        meta: ['lee', 1],
        payload: {
            lee: [
                {
                    too: simpleObject,
                },
                {
                    pot: simpleObject,
                },
            ],
        },
    },
    removeObjectsInArray: {
        type: 'removeObjectsInArray',
        meta: ['lee'],
        payload: {
            lee: [
                {
                    pot: simpleObject,
                },
            ],
        },
    },
    removeAllInArray: {
        type: 'removeAllInArray',
        meta: ['lee'],
        payload: {
            foo: 0,
            bar: {
                boo: 0,
                bla: 0,
            },
            lee: [],
        },
    },
};

export const objectInArrayActions = Object.keys(simpleObjectActions).reduce((next, key) => {
    const newKey = `_${key}InArray`;
    const newAction = {
        type: newKey,
    };
    if (simpleObjectActions[key].meta && simpleObjectActions[key].meta.length > 0) {
        newAction.meta = ['lee', 0, 'too', ...simpleObjectActions[key].meta];
        if (simpleObjectActions[key].payload !== undefined) {
            newAction.payload = JSON.parse(JSON.stringify(simpleObjectActions[key].payload));
            if (newAction.payload.lee) {
                delete newAction.payload.lee;
            }
        }
        next[newKey] = newAction;
    }
    return next;
}, {});

export const actions = Object.assign({}, simpleObjectActions, arrayActions, objectInArrayActions);
