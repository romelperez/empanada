import { createRandomWords } from '../createRandomWords';

const createRandomEmail = (): string => {
  const nameLength = 1 + Math.round(Math.random());
  const name = createRandomWords(nameLength).replace(' ', '');
  const domain = createRandomWords(1);
  return `${name}@${domain}.com`;
};

export { createRandomEmail };
