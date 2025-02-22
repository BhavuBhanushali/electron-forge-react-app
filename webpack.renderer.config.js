const rules = require('./webpack.rules');
const path = require("path")

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.less$/,
  use: [
    "style-loader",
    "css-loader",
    {
      loader: "less-loader",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            '@blue-6': '#15A9E1',
            '@green-6': '#52c41a',
            '@red-6': '#f5222d',
            '@gold-6': '#faad14',
            '@gray-6': '#9b9b9b',
            '@primary-color': '@blue-6',
            '@text-color-dark': 'fade(#fff,85%)',
            '@link-color': '@primary-color',
            '@link-active-color': 'fade(@blue-6,85%)',
            '@info-color': '@blue-6',
            '@success-color': '@green-6',
            '@processing-color': '@primary-color',
            '@error-color': '@red-6',
            '@highlight-color': '@red-6',
            '@warning-color': '@gold-6',
            '@normal-color': '#d9d9d9',
            '@menu-bg': '#00305d',
            '@layout-trigger-background': '#297BB8',
            '@menu-item-color': '@text-color-dark',
            '@item-active-bg': 'white',
            '@body-background': 'white',
          },

        },
      },
    },
  ],
});
rules.push({
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        webpackImporter: false,
      },
    },
  ],
})

rules.push({
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use: {
    loader: "url-loader",
    options: {
      outputPath: "/",
      publicPath: "/assets/",
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
  resolve: {
    fallback: {
      fs: false, // Disable Node.js modules in renderer
      path: require.resolve("path-browserify"),
    },
  },
  externals: {
    localforage: "commonjs localforage", // Ensure correct bundling
  },
  target: "web",
};
