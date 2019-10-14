const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app = process.cwd();
const src = path.resolve(app, 'src');
const build = path.resolve(app, 'build');

const devMode = process.env.NODE_ENV !== 'production';

const plugins = [];

if (devMode) {
  plugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve(app, 'index.html')
    })
  );
}

module.exports = {
  entry: src + '/index.js',
  output: {
    filename: 'bundle.js',
    path: build,
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins
};
