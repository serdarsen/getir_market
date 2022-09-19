import { CleanWebpackPlugin } from "clean-webpack-plugin";
import DotEnv from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
} from "webpack";
import {
  Configuration as WebpackDevServerConfiguration,
} from "webpack-dev-server";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

interface Configuration extends WebpackConfiguration {
  devServer: WebpackDevServerConfiguration | undefined;
}

const isPro = process.env.npm_lifecycle_event === "build";

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
  new DotEnv({
    path: path.resolve(__dirname, ".env"),
  }),
];

const devPlugins = [
  ...commonPlugins,
  new HotModuleReplacementPlugin(),
];

const proPlugins = [
  ...commonPlugins,
  new MiniCssExtractPlugin({ filename: "main.[contenthash].css" }),
  new CleanWebpackPlugin(),
  new WebpackManifestPlugin({ fileName: "manifest.json" }),
];

const config: Configuration = {
  mode: isPro ? "production" : "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: isPro ? MiniCssExtractPlugin.loader : "style-loader",
        }, {
          loader: "css-loader",
        }, {
          loader: "sass-loader",
        }],
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", {
                runtime: "automatic",
              }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: isPro ? proPlugins : devPlugins,
  devtool: isPro ? "source-map" : "inline-source-map",
  devServer: isPro ? undefined : {
    static: path.join(__dirname, "public"),
    historyApiFallback: true,
    port: 4000,
    open: false,
  },
};

export default config;
