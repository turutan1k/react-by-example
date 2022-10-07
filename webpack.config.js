//импорт самого вебпака
const webpack = require('webpack');
//импорт path, который будет помогать указывать пути к файлам
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //указывает, на какой стадии находится проект
    mode: 'development',
    //указываем объект, где параметр - название нашего bundle, значение - путь в наш entry файл
    entry: './src/index.tsx',
    //папка для экспорта bundle, если ее нет, создаст самостоятельно
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    //webpack-dev-server settings
    devServer: {
        port: 3000,
    },
    plugins: [
        //переносит шаблон в папку и импортирует все бандлы
        new HTMLWebpackPlugin({ template: './src/index.tsx' }),
        //очищает неиспользуемые бандлы
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
};
