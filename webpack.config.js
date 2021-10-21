const path =  require('path') //para tratar os caminhos - questao das barras que sao diferentes no windows c:/ c:\ 
const HtmlWebpackPlugin = require('html-webpack-plugin') 


const isDevelopment = process.env.NODE_ENV !== 'production'
//verificando o ambiente

module.exports ={
    mode: isDevelopment ? 'development' : 'production', 
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx'],
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: [
                        {
                            loader: require.resolve("babel-loader"),
                        },
                    ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }        
        ],
    }
};


