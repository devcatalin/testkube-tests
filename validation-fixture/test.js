import assert from 'node:assert/strict';

import {greeting} from './app.js';

assert.equal(greeting('Ada'), 'Welcome, Ada!');
assert.equal(greeting('Grace'), 'Welcome, Grace!');
console.log('fixture passed');
