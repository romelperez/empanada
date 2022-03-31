const assert = require('assert');

const { createRandomWords, createRandomEmail } = require('empanada');

assert.match(createRandomWords(2), /^[a-z]+ [a-z]+$/);
assert.match(createRandomEmail(), /^[a-z]+@[a-z]+.com$/);
