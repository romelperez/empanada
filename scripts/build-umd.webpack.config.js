const path = require('path');

const { NODE_ENV, BUILD_OUT_FILE } = process.env;
const CWD = process.cwd();

module.exports = {
  mode: NODE_ENV || 'development',
  entry: './src/index.ts',
  output: {
    path: path.join(CWD, './build/umd/'),
    filename: BUILD_OUT_FILE,
    library: 'empanada',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.build.umd.json'
          }
        }
      }
    ]
  },
  devtool: false
};
