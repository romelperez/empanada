#!/bin/sh

rm -rf ./build/umd/

# Development unminified build
npx cross-env \
  NODE_ENV=development \
  BUILD_OUT_FILE=empanada.js \
  npx webpack --config=./scripts/build-umd.webpack.config.js

# Production minified build
npx cross-env \
  NODE_ENV=production \
  BUILD_OUT_FILE=empanada.min.js \
  npx webpack --config=./scripts/build-umd.webpack.config.js
