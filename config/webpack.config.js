const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

const config = {
    mode: 'development',
    entry: "./src/main.tsx", // 入口文件
    resolve: {
        extensions: ['.tsx', '.ts', 'json', '...'],
        alias: {
            Src: path.resolve(__dirname, '../src'),
            Utils: path.resolve(__dirname, '../utils'),
            Assets: path.resolve(__dirname, '../assets')
        }
    },
    module: {
        rules: [
            //处理js
            {
                test: /\.(ts|jsx|tsx)?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            // 图片文件
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
                type: "asset/resource",
                generator: {
                    // 输出文件位置以及文件名
                    filename: "[name].[ext]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 超过10kb不转 base64
                    },
                },
            },
            // 字体
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: "asset/resource",
            },
            // css
            {
                test: /\.(css|less)?$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }

        ]
    },
    output: {
        filename: "[name].[hash:6].js", // 添加哈希值，防止缓存
        path: path.resolve(__dirname, "../dist"), // 输出文件夹
    },
    devServer: {
        static: path.resolve(__dirname, "./dist"), // 静态文件目录
        port: 8081, // 端口号
        hot: true,
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            // 动态生成 html 文件
            template: "./index.html",
        }),
        new CleanWebpackPlugin(), // 清除旧资源
        new webpack.ProvidePlugin({
            React: "react",
        })
    ]
};

module.exports = (env, argv) => {
    // 不同环境配置不同mode、devtool
    if (process.env.MODE === "development") {
        config.mode = "development";
        config.devtool = "eval-cheap-module-source-map"; //开发环境下使用
    } else if (process.env.MODE === "staging") {
        config.mode = "production";
        config.devtool = "source-map";
    } else {
        config.mode = "production";
        config.devtool = false;
    }
    // 根据参数，重新定义三种模式
    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env.MODE": JSON.stringify(process.env.MODE),
        })
    );
    console.log(config);

    return config;
};