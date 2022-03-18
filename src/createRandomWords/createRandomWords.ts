import { LOREM_IPSUM } from '../constants';

const createRandomWords = (length: number = 3): string => {
  const words = LOREM_IPSUM.split(' ');
  return Array(length)
    .fill(0)
    .map(() => words[Math.round(Math.random() * (words.length - 1))])
    .join(' ');
};

export { createRandomWords };
