/* eslint-env jes */

import { createRandomWords } from './createRandomWords';

test('Should create 3 words by default', () => {
  const received = createRandomWords();
  expect(received.split(' ')).toHaveLength(3);
});
