import { LOREM_IPSUM } from '../constants';

const createRandomWords = (length: number = 3): string =>
  Array(length)
    .fill(0)
    .map(() => LOREM_IPSUM[Math.round(Math.random() * LOREM_IPSUM.length - 1)])
    .join(' ');

export { createRandomWords };
