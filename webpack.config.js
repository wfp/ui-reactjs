const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./lib/styles/[name].css');


var config = {
  entry: [
    './src/index.js'
  ],
  //devtool: "inline-source-map",
  output: {
    library: 'wfp-ui-reactjs',
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
    'react-dom': {
      root: 'ReactDOM', commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'react/lib/ReactCSSTransitionGroup': 'ReactCSSTransitionGroup',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
            plugins: ['transform-class-properties', 'transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:  [
            {
              loader: 'css-loader',
              options: {
                sourceMap: 'true'
              }
            },
            { loader: 'sass-loader', options: {
              sourceMap: true,
              includePaths: ["node_modules"]
            } }
          ]
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      }
    ]
  },
  plugins: [ extractCSS ],
  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  }
};

module.exports = config;
