const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./lib/styles/[name].css');


var config = {
  entry: ['./src/index.js', './src/styles/main.scss'],
  output: {
    library: 'wfp-wss-ui-react',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: "./lib/index.js",
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react/lib/ReactCSSTransitionGroup': 'ReactCSSTransitionGroup',
    'react-dom': 'ReactDOM'
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
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      }
    ]
  },
  plugins: [ extractCSS ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }
};

module.exports = config;
