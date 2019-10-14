const devMode = process.env.NODE_ENV !== 'production';
const mode = devMode ? 'development' : 'production';
const devtool = devMode ? 'eval' : 'source-map';

module.exports = {
  mode,
  devtool,
  entry: __dirname + '/client/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: '/'
  },
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
  }
};
