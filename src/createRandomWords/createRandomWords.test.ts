/* eslint-env jes */

import { createRandomWords } from './createRandomWords';

test('Should create 3 words by default', () => {
  const received = createRandomWords();
  expect(received.split(' ')).toHaveLength(3);
});

test('Should create provided length of words', () => {
  const received = createRandomWords(5);
  expect(received.split(' ')).toHaveLength(5);
});

test('Should create non-empty strings as words', () => {
  const received = createRandomWords(7);
  const validWords = received
    .split(' ')
    .map((w) => w.trim())
    .filter(Boolean);
  expect(validWords).toHaveLength(7);
});
