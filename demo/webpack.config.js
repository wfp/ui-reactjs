var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")

module.exports = {
  entry: {
    wss: './src/wss_ui/site/static/project/wss.js',
    page_create: './src/wss_ui/site/static/project/page_create.jsx',
    incoming_ep: './src/wss_ui/site/static/project/incoming_ep.js'
  },
  output: {
    path: path.resolve('./src/wss_ui/site/static/dist'),
    filename: '[name].bundle.js'
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
  },
  plugins: [
    new CommonsChunkPlugin({
      name: "common"
    })
  ]
};
