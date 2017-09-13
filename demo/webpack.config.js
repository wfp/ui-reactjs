const path = require("path");
// const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./styles/[name].css');

module.exports = {
  entry: {
    header_ep: ['./src/wss_ui/site/static/project/header_ep.js', 'wfp-wss-ui-react/lib/styles/main.css'],
    my_requests_ep: './src/wss_ui/site/static/project/my_requests_ep.js',
    page_create_ep: './src/wss_ui/site/static/project/page_create_ep.js',
    incoming_ep: './src/wss_ui/site/static/project/incoming_ep.js',
    index_ep: './src/wss_ui/site/static/project/index_ep.js'
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
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    // new CommonsChunkPlugin({
    //   name: "common"
    // }),
    extractCSS
  ]
};
