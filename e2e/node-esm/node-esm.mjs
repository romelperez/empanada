import assert from 'assert';

import { createRandomWords, createRandomEmail } from '../../build/esm';

assert.match(createRandomWords(2), /^[a-z]+ [a-z]+$/);
assert.match(createRandomEmail(), /^[a-z]+@[a-z]+.com$/);
