const path = require("path");
// const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./styles/[name].css');

module.exports = {
  entry: {
    wss: ['./src/wss_ui/site/static/project/wss.js', 'wfp-wss-ui-react/lib/styles/main.css'],
    page_create_ep: './src/wss_ui/site/static/project/page_create_ep.js',
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
