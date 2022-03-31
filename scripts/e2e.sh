#!/bin/sh

node ./e2e/node-cjs/node-cjs.js

node --experimental-specifier-resolution=node ./e2e/node-esm/node-esm.mjs
