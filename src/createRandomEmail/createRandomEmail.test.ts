/* eslint-env jest */

import { createRandomEmail } from './createRandomEmail';

const isRandomEmailMatch = /^[a-z]+\@[a-z]+\.com$/i;

test('Should return random email address', () => {
  expect(createRandomEmail()).toMatch(isRandomEmailMatch);
  expect(createRandomEmail()).toMatch(isRandomEmailMatch);
  expect(createRandomEmail()).toMatch(isRandomEmailMatch);
});
