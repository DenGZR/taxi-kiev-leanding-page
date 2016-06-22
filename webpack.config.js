module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {
    entry: './dev/scripts/main.js',
    output: {
      path: __dirname,
      filename: 'main.js'
    },
    debug : isDev,
    module: {
      loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015',  'stage-0']
        }
      }]
    }
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}