import { arrayActions, objectInArrayActions } from '../objectState/actions';

const objectToArrayActionsReducer = (reducedObject) => (next, key) => {
    const newAction = {
        type: `__${key}`,
    };

    if (reducedObject[key].meta && reducedObject[key].meta.length > 1) {
        newAction.meta = reducedObject[key].meta.slice(1);
        if (reducedObject[key].payload !== undefined) {
            newAction.payload = JSON.parse(JSON.stringify(reducedObject[key].payload));
            if (newAction.payload.lee) {
                newAction.payload = newAction.payload.lee;
            }
        }
        next[key] = newAction;
    }
    return next;
};

export const rootArrayActions = Object.keys(arrayActions).reduce(
    objectToArrayActionsReducer(arrayActions),
    {}
);

export const rootArrayObjectInArrayActions = Object.keys(objectInArrayActions).reduce(
    objectToArrayActionsReducer(objectInArrayActions),
    {}
);

export const actions = Object.assign({}, rootArrayActions, rootArrayObjectInArrayActions);
