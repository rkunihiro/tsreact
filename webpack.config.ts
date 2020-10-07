import { resolve } from "path";

import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const entry: webpack.Entry = {
    bundle: resolve(__dirname, "./src/main.tsx"),
};

const output: webpack.Output = {
    path: resolve(__dirname, "./dist"),
    filename: "[name].js",
};

const babelConfig = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false,
                loose: true,
                targets: {
                    chrome: 80,
                    // android: 8,
                    // ios: 12,
                },
                useBuiltIns: "usage",
                corejs: 3,
                debug: true,
            },
        ],
        "@babel/preset-typescript",
        "@babel/preset-react",
    ],
    plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"],
};

const tsRule: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: [
        {
            loader: "babel-loader",
            options: babelConfig,
        },
    ],
    exclude: /node_modules/,
};

const devServer: WebpackDevServer.Configuration = {
    contentBase: resolve(__dirname, "./public"),
    port: 3000,
};

export const factory: webpack.ConfigurationFactory = (_env, args) => {
    const isProduction =
        args.mode === "production" || process.env.NODE_ENV === "production";
    return {
        mode: isProduction ? "production" : "development",
        entry,
        output,
        module: {
            rules: [tsRule],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
            plugins: [new TsconfigPathsPlugin()],
        },
        optimization: {
            minimize: isProduction,
            minimizer: [new TerserPlugin()],
        },
        devtool: "source-map", // isProduction ? "hidden-source-map" : "source-map",
        devServer,
    };
};

export default factory;
