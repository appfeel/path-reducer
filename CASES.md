# Cases
Here you can find the diferent cases where you can modify the state with a path.

## Object store state
### Do nothing action
Dispatched action: doNothing:

```javascript
store.dispatch({
    "type": "doNothing"
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div>
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Do nothing alt action
Dispatched action: doNothingAlt:

```javascript
store.dispatch({
    "type": "doNothingAlt",
    "meta": [],
    "payload": {
        "foo": 0,
        "bar": {
            "boo": 0,
            "bla": 0
        },
        "lee": [
            {
                "too": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "tea": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "pot": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        ]
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Add element action
Dispatched action: addElement:

```javascript
store.dispatch({
    "type": "addElement",
    "meta": [
        "kaw"
    ],
    "payload": {
        "kaw": 0
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ],
    "kaw": 0
}
```
  </div>
</div>
### Update element action
Dispatched action: updateElement:

```javascript
store.dispatch({
    "type": "updateElement",
    "meta": [
        "foo"
    ],
    "payload": {
        "foo": 1
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 1,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Remove element action
Dispatched action: removeElement:

```javascript
store.dispatch({
    "type": "removeElement",
    "meta": [],
    "payload": {
        "bar": {
            "boo": 0,
            "bla": 0
        },
        "lee": [
            {
                "too": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "tea": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "pot": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        ]
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Add object action
Dispatched action: addObject:

```javascript
store.dispatch({
    "type": "addObject",
    "meta": [
        "kaw",
        "ree"
    ],
    "payload": {
        "kaw": {
            "ree": 0
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ],
    "kaw": {
        "ree": 0
    }
}
```
  </div>
</div>
### Add element in object action
Dispatched action: addElementInObject:

```javascript
store.dispatch({
    "type": "addElementInObject",
    "meta": [
        "bar",
        "kaw"
    ],
    "payload": {
        "kaw": 0
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "kaw": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Add object in object action
Dispatched action: addObjectInObject:

```javascript
store.dispatch({
    "type": "addObjectInObject",
    "meta": [
        "bar",
        "ree",
        "laa"
    ],
    "payload": {
        "bar": {
            "ree": {
                "laa": 1
            }
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "ree": {
            "laa": 1
        }
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Add array in object action
Dispatched action: addArrayInObject:

```javascript
store.dispatch({
    "type": "addArrayInObject",
    "meta": [
        "bar",
        "ree",
        0
    ],
    "payload": {
        "bar": {
            "ree": [
                {
                    "laa": 1
                }
            ]
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0,
        "ree": [
            {
                "laa": 1
            }
        ]
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Update object action
Dispatched action: updateObject:

```javascript
store.dispatch({
    "type": "updateObject",
    "meta": [
        "bar"
    ],
    "payload": {
        "bar": {
            "boo": 1,
            "rew": 1
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 1,
        "rew": 1
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Update element in object action
Dispatched action: updateElementInObject:

```javascript
store.dispatch({
    "type": "updateElementInObject",
    "meta": [
        "bar",
        "boo"
    ],
    "payload": {
        "boo": 1
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 1,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Remove object action
Dispatched action: removeObject:

```javascript
store.dispatch({
    "type": "removeObject",
    "meta": [],
    "payload": {
        "foo": 0,
        "lee": [
            {
                "too": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "tea": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "pot": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        ]
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Add object in array action
Dispatched action: addObjectInArray:

```javascript
store.dispatch({
    "type": "addObjectInArray",
    "meta": [
        "lee",
        1
    ],
    "payload": {
        "lee": [
            {
                "too": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "kep": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "tea": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "pot": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        ]
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "kep": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Update array action
Dispatched action: updateArray:

```javascript
store.dispatch({
    "type": "updateArray",
    "meta": [
        "lee",
        1
    ],
    "payload": {
        "lee": [
            {
                "too": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "kep": {
                    "fer": {
                        "foo": 0,
                        "bar": {
                            "boo": 0,
                            "bla": 0
                        }
                    }
                }
            },
            {
                "pot": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        ]
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "kep": {
                "fer": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Remove array action
Dispatched action: removeArray:

```javascript
store.dispatch({
    "type": "removeArray",
    "meta": [],
    "payload": {
        "foo": 0,
        "bar": {
            "boo": 0,
            "bla": 0
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    }
}
```
  </div>
</div>
### Remove object in array action
Dispatched action: removeObjectInArray:

```javascript
store.dispatch({
    "type": "removeObjectInArray",
    "meta": [
        "lee",
        1
    ],
    "payload": {
        "lee": [
            {
                "too": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            },
            {
                "pot": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        ]
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Remove objects in array action
Dispatched action: removeObjectsInArray:

```javascript
store.dispatch({
    "type": "removeObjectsInArray",
    "meta": [
        "lee"
    ],
    "payload": {
        "lee": [
            {
                "pot": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        ]
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
### Remove all in array action
Dispatched action: removeAllInArray:

```javascript
store.dispatch({
    "type": "removeAllInArray",
    "meta": [
        "lee"
    ],
    "payload": {
        "foo": 0,
        "bar": {
            "boo": 0,
            "bla": 0
        },
        "lee": []
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": []
}
```
  </div>
</div>
###  add element in array action
Dispatched action: _addElementInArray:

```javascript
store.dispatch({
    "type": "_addElementInArray",
    "meta": [
        "lee",
        0,
        "too",
        "kaw"
    ],
    "payload": {
        "kaw": 0
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "kaw": 0
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
###  update element in array action
Dispatched action: _updateElementInArray:

```javascript
store.dispatch({
    "type": "_updateElementInArray",
    "meta": [
        "lee",
        0,
        "too",
        "foo"
    ],
    "payload": {
        "foo": 1
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 1,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
###  add object in array action
Dispatched action: _addObjectInArray:

```javascript
store.dispatch({
    "type": "_addObjectInArray",
    "meta": [
        "lee",
        0,
        "too",
        "kaw",
        "ree"
    ],
    "payload": {
        "kaw": {
            "ree": 0
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "kaw": {
                    "ree": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
###  add element in object in array action
Dispatched action: _addElementInObjectInArray:

```javascript
store.dispatch({
    "type": "_addElementInObjectInArray",
    "meta": [
        "lee",
        0,
        "too",
        "bar",
        "kaw"
    ],
    "payload": {
        "kaw": 0
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "kaw": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
###  add object in object in array action
Dispatched action: _addObjectInObjectInArray:

```javascript
store.dispatch({
    "type": "_addObjectInObjectInArray",
    "meta": [
        "lee",
        0,
        "too",
        "bar",
        "ree",
        "laa"
    ],
    "payload": {
        "bar": {
            "ree": {
                "laa": 1
            }
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "ree": {
                        "laa": 1
                    }
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
###  add array in object in array action
Dispatched action: _addArrayInObjectInArray:

```javascript
store.dispatch({
    "type": "_addArrayInObjectInArray",
    "meta": [
        "lee",
        0,
        "too",
        "bar",
        "ree",
        0
    ],
    "payload": {
        "bar": {
            "ree": [
                {
                    "laa": 1
                }
            ]
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0,
                    "ree": [
                        {
                            "laa": 1
                        }
                    ]
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
###  update object in array action
Dispatched action: _updateObjectInArray:

```javascript
store.dispatch({
    "type": "_updateObjectInArray",
    "meta": [
        "lee",
        0,
        "too",
        "bar"
    ],
    "payload": {
        "bar": {
            "boo": 1,
            "rew": 1
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 1,
                    "rew": 1
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
###  update element in object in array action
Dispatched action: _updateElementInObjectInArray:

```javascript
store.dispatch({
    "type": "_updateElementInObjectInArray",
    "meta": [
        "lee",
        0,
        "too",
        "bar",
        "boo"
    ],
    "payload": {
        "boo": 1
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
{
    "foo": 0,
    "bar": {
        "boo": 0,
        "bla": 0
    },
    "lee": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 1,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
}
```
  </div>
</div>
## Array store state
###   add object in array action
Dispatched action: __addObjectInArray:

```javascript
store.dispatch({
    "type": "__addObjectInArray",
    "meta": [
        1
    ],
    "payload": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "kep": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "tea": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "kep": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###   update array action
Dispatched action: __updateArray:

```javascript
store.dispatch({
    "type": "__updateArray",
    "meta": [
        1
    ],
    "payload": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "kep": {
                "fer": {
                    "foo": 0,
                    "bar": {
                        "boo": 0,
                        "bla": 0
                    }
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "kep": {
            "fer": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###   remove object in array action
Dispatched action: __removeObjectInArray:

```javascript
store.dispatch({
    "type": "__removeObjectInArray",
    "meta": [
        1
    ],
    "payload": [
        {
            "too": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        },
        {
            "pot": {
                "foo": 0,
                "bar": {
                    "boo": 0,
                    "bla": 0
                }
            }
        }
    ]
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###    add element in array action
Dispatched action: ___addElementInArray:

```javascript
store.dispatch({
    "type": "___addElementInArray",
    "meta": [
        0,
        "too",
        "kaw"
    ],
    "payload": {
        "kaw": 0
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "kaw": 0
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###    update element in array action
Dispatched action: ___updateElementInArray:

```javascript
store.dispatch({
    "type": "___updateElementInArray",
    "meta": [
        0,
        "too",
        "foo"
    ],
    "payload": {
        "foo": 1
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 1,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###    add object in array action
Dispatched action: ___addObjectInArray:

```javascript
store.dispatch({
    "type": "___addObjectInArray",
    "meta": [
        0,
        "too",
        "kaw",
        "ree"
    ],
    "payload": {
        "kaw": {
            "ree": 0
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "kaw": {
                "ree": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###    add element in object in array action
Dispatched action: ___addElementInObjectInArray:

```javascript
store.dispatch({
    "type": "___addElementInObjectInArray",
    "meta": [
        0,
        "too",
        "bar",
        "kaw"
    ],
    "payload": {
        "kaw": 0
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "kaw": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###    add object in object in array action
Dispatched action: ___addObjectInObjectInArray:

```javascript
store.dispatch({
    "type": "___addObjectInObjectInArray",
    "meta": [
        0,
        "too",
        "bar",
        "ree",
        "laa"
    ],
    "payload": {
        "bar": {
            "ree": {
                "laa": 1
            }
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "ree": {
                    "laa": 1
                }
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###    add array in object in array action
Dispatched action: ___addArrayInObjectInArray:

```javascript
store.dispatch({
    "type": "___addArrayInObjectInArray",
    "meta": [
        0,
        "too",
        "bar",
        "ree",
        0
    ],
    "payload": {
        "bar": {
            "ree": [
                {
                    "laa": 1
                }
            ]
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0,
                "ree": [
                    {
                        "laa": 1
                    }
                ]
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###    update object in array action
Dispatched action: ___updateObjectInArray:

```javascript
store.dispatch({
    "type": "___updateObjectInArray",
    "meta": [
        0,
        "too",
        "bar"
    ],
    "payload": {
        "bar": {
            "boo": 1,
            "rew": 1
        }
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 1,
                "rew": 1
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
###    update element in object in array action
Dispatched action: ___updateElementInObjectInArray:

```javascript
store.dispatch({
    "type": "___updateElementInObjectInArray",
    "meta": [
        0,
        "too",
        "bar",
        "boo"
    ],
    "payload": {
        "boo": 1
    }
});
```

<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;">
  <div style="display: inline-block;">
Initial store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
  <div style="display: inline-block;">
Next store state:

```json
[
    {
        "too": {
            "foo": 0,
            "bar": {
                "boo": 1,
                "bla": 0
            }
        }
    },
    {
        "tea": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    },
    {
        "pot": {
            "foo": 0,
            "bar": {
                "boo": 0,
                "bla": 0
            }
        }
    }
]
```
  </div>
</div>
