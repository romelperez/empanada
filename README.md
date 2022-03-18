![Empanada](https://github.com/romelperez/empanada/raw/main/empanada.jpg)

# Empanada

Simple data mock generator.

[![version](https://img.shields.io/npm/v/empanada.svg)](https://npmjs.org/package/empanada)
[![ci](https://github.com/romelperez/empanada/workflows/ci/badge.svg)](https://github.com/romelperez/empanada/actions)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/empanada.svg)](https://npmjs.org/package/empanada)
[![downloads](https://img.shields.io/npm/dm/empanada.svg)](https://npmjs.org/package/empanada)
[![github stars](https://img.shields.io/github/stars/romelperez/empanada.svg?style=social&label=stars)](https://github.com/romelperez/empanada)
[![license](https://img.shields.io/github/license/romelperez/empanada.svg?maxAge=2592000)](https://github.com/romelperez/empanada/blob/main/LICENSE)

## API

### `LOREM_IPSUM: string`

A long lorem ipsum text example.

### `createRandomWords(length: number = 3): string`

Create a string with random words.

```ts
import { createRandomWords } from 'empanada';

console.log(createRandomWords(4)); // Example: "amet nostrud lorem deserunt"
```

## License

MIT
