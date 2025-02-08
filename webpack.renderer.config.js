const rules = require('./webpack.rules');
const path = require("path")

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use: {
    loader: "url-loader",
    options: {
      outputPath: "/",
      publicPath: "/assets/images",
      name: "[path][name].[ext]",
      esModule: false,
    },
  },
})
rules.push({
  test: /\.(js|jsx)$/, // Adjust to handle .jsx files
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
