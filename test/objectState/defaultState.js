
export const simpleObject = {
    foo: 0,
    bar: {
        boo: 0,
        bla: 0,
    },
};

export const defaultState = Object.assign(
    {},
    simpleObject,
    {
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
    }
);
