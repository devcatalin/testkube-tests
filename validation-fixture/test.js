import assert from 'node:assert/strict';

import {greeting} from './app.js';

assert.equal(greeting('Testkube'), 'Hello, Testkube!');
console.log('fixture passed');
