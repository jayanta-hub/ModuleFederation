const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "mbiz-7000"),
    compress: true,
    port: 7000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    asyncChunks: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "musafir",
      remotes: {
        musafirFlight: "musafirFlight@http://localhost:7001/musafir-flight-remoteEntry.js",
        musafirHotel: "musafirHotel@http://localhost:7002/musafir-hotel-remoteEntry.js",
        // musafirFlight: "musafirFlight@http://43.205.14.219:7001/remoteEntry.js",
        // musafirHotel: "musafirHotel@http://43.205.14.219:7002/remoteEntry.js",
      },
      shared: { react: { singleton: true }, 
               "react-dom": { singleton: true },
               "react-router-dom": { singleton: true }
              }
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
