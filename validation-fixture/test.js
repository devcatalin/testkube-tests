import assert from 'node:assert/strict';

import {greeting} from './app.js';

assert.equal(greeting('Ada'), 'Welcome, Ada!');
console.log('fixture passed');
