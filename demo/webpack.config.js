var path = require("path");

module.exports = {
  entry: './src/wss_ui/site/static/project/wss.js',
  output: {
    path: path.resolve('./src/wss_ui/site/static/dist'),
    filename: 'wss.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }
};
