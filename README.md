# Path reducer

[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://npmjs.org/package/path-reducer)
[![NPM version](http://img.shields.io/npm/v/path-reducer.svg?style=flat)](https://npmjs.org/package/path-reducer)
[![Downloads](http://img.shields.io/npm/dm/path-reducer.svg?style=flat)](https://npmjs.org/package/path-reducer)
[![Build Status](http://img.shields.io/travis/appfeel/path-reducer.svg?style=flat)](https://travis-ci.org/appfeel/path-reducer)
[![dependency status](https://img.shields.io/david/gcanti/path-reducer.svg?style=flat-square)](https://david-dm.org/appfeel/path-reducer)

This is a reducer function (maybe [redux](https://github.com/reactjs/redux) middleware in the future) to modify the app state via path.
At this development stage, it only works with [immutable-js](https://facebook.github.io/immutable-js/docs/#/) state objects.

# Quick start

```javascript
import { assert } from 'chai';
import { updateImmutableState } from 'path-reducer';
import { Immutable } from 'immutable';
import { createStore } from 'redux';

const defaultState = Immutable.fromJS({
    foo: 0,
    bar: {
        boo: 0,
        bla: 0
    }
});
const reducer = (state = defaultState, action) => {
    const nextState = updateImmutableState(state, action);
    // Operate with nextState here
    return nextState;
};
const store = createStore(reducer);
const action = {
    type: 'updateElementInObject',
    meta: ['bar', 'boo'],
    payload: {
        boo: 1
    }
};

store.dispatch(action);
assert.equal(store.getState(), {
    foo: 0,
    bar: {
        boo: 1,
        bla: 0
    }
});
```

# API

## updateImmutableState(state, action)
This is just a simple reducer. It expects an FSA action:

```json
{
    "type": "myApp/myAction",
    "meta": [],
    "payload": { }
}
```

The reducer function will look for an array in `meta` and an object/array in `payload`.
When this conditions are met, it will try to update the path specified into the supplied state.

**[SEE CASES.md](https://github.com/appfeel/path-reducer/CASES.md)** for an extended list of expample cases.

*Note* the path must be relative to the suplied path, not to the state path. If you are updating a sub-tree of the state, you should add the corresponding part of the path to the action:

```javascript
const reducer = (state = defaultState, action) => {
    const newAction = {
        type: action.type,
        meta: ['additional', 'path', 'elements', ...action.path],
        payload: Object.assign({}, action.payload)
    };
    const nextState = updateImmutableState(state, action);
    // Operate with nextState here
    return nextState;
};
```

# License: MIT

```
The MIT License (MIT)

Copyright (c) 2016 AppFeel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

# Next steps

- [ ] Implement [redux](https://github.com/reactjs/redux) middleware
- [ ] Support non [immutable-js](https://facebook.github.io/immutable-js/docs/#/) state

*<p style="font-size: small;" align="right"><a color="#232323;" href="http://appfeel.com">Made in Barcelona with <span color="#FCB"><3</span> and <span color="#BBCCFF">Code</span></a></p>*
