![Empanada](https://github.com/romelperez/empanada/raw/main/empanada.jpg)

# Empanada

Simple data mock generator.

[![version](https://img.shields.io/npm/v/empanada.svg)](https://npmjs.org/package/empanada)
[![ci](https://github.com/romelperez/empanada/workflows/ci/badge.svg)](https://github.com/romelperez/empanada/actions)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/empanada.svg)](https://npmjs.org/package/empanada)
[![downloads](https://img.shields.io/npm/dm/empanada.svg)](https://npmjs.org/package/empanada)
[![github stars](https://img.shields.io/github/stars/romelperez/empanada.svg?style=social&label=stars)](https://github.com/romelperez/empanada)
[![license](https://img.shields.io/github/license/romelperez/empanada.svg?maxAge=2592000)](https://github.com/romelperez/empanada/blob/main/LICENSE)

## Installation

```bash
npm install empanada
```

## How to use

### CJS

```js
const { createRandomWords } = require('empanada');
console.log(createRandomWords());
```

### ESM

```js
import { createRandomWords } from 'empanada';
console.log(createRandomWords());
```

#### Setup

ESM is supported without fully specified paths.

##### Node

```bash
node --experimental-specifier-resolution=node ./myapp.mjs
```

##### Webpack

```js
// webpack.config.js
module.exports = {
  // ...
  module: {
    // ...
    rules: [
      // ...
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  }
};
```

### UMD

```html
<script src="https://unpkg.com/empanada@latest/build/umd/empanada.min.js"></script>
<script>
  const { createRandomWords } = window.empanada;
  console.log(createRandomWords());
</script>
```

## API

### `LOREM_IPSUM: string`

A long lorem ipsum text example.

### `createRandomWords(length: number = 3): string`

Create a string with random words.

```ts
import { createRandomWords } from 'empanada';

console.log(createRandomWords(4));
// "amet nostrud lorem deserunt"
```

### `createRandomEmail(): string`

Create a string with a random email address ending in ".com".

```ts
import { createRandomEmail } from 'empanada';

console.log(createRandomEmail());
// "consecteturelit@eiusmod.com"
```
