const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const AppPrincipal = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-flow'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  }
}

const AppCliente = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'client-dist.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client-public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-flow'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'client-public')
  //   },
  //   compress: true,
  //   port: 6000
  // }
}

module.exports = [AppPrincipal, AppCliente]
