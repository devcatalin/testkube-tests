import assert from 'node:assert/strict';

import {farewell, greeting} from './app.js';

assert.equal(greeting('Testkube'), 'Hello, Testkube!');
assert.equal(farewell('Lin'), 'Goodbye, Lin!');
console.log('fixture passed');
