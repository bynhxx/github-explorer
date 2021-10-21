module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]

        //para que não seja necessário importar o react (react v17+)
    ]
}