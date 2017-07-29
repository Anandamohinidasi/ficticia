const webpack = require('webpack'),
    pkg     = require('./package.json'),  //loads npm config file
    html    = require('html-webpack-plugin');

module.exports = {
  context : __dirname + '/src/app',
  entry   : {
    app     : __dirname + '/src/app/app.module.js',
    vendor  : Object.keys(pkg.dependencies) //get npm vendors deps from config
  },
  output  : {
    path      : __dirname + '/dist',
    filename  : '[name].min-[hash:6].js'
  },
  plugins: [
   // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.min-[hash:6].js'),
    new html({template : __dirname + '/src/app/index.html'})
  ]
};
