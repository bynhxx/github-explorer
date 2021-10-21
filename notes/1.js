
// 1 - CONFIGURANDO O AMBIENTE //
// ==  criando manualmente a estrutura do projeto == //

/*  

1) inicializar package.json
2) instalar react
3) instalar react-dom
4) criar estrutura de pastas

5)  instalar e configurar Babel 
-   antes que o código chegue em produção)
-   (converte JS do projeto para JS compativel com o browser 
(
    npm install 
    @babel/core 
    @babel/cli 
    @babel/preset-env  [verifica qual o ambiente em que o código está sendo executado - node / browser]
    -d
)
-   -> criar arquivo babel.config.js 
-   -> instalar preset do react @babel/preset-react -D
-   comando babel: source --out-file output  
-   --out-file: cria uma pasta
npm babel src/index.js --out-file dist/bundle.js 

6)  Instalar e configurar webpack | webpack-cli | webpack-dev-server
-   WP na maior parte das vezes trabalha em conjunto com o babel. 
-   Permite tratar arquivos de diversos tipos e extensões que foram importados
-   no desenvolvimento da aplicação (scss, imgs, etc) para que sejam entendíveis
-   pelo browser.
-   -> arquivo webpack.config.js 

7) Definir a estrutura do react:
-   Adicionar div com id root ao index.html
-   importar método render do 'react-dom'

8) Servindo HTML estático: 
-  npm i html-webpack-plugin -D
-  + configurações no webpack config

9) Webpack dev server
-  npm i webpack-dev-server -D
-  automatizar o bundle para que nao seja necessário
-  sempre rodar o webpack = fast refresh


10) Configurando source maps do webpack
-   forma de conseguir visualizar o código feito pelo 
-   desenvolvedor, para que os erros sejam exibidos corretamente
-   (serão utilizados um sourcemap para desenvolvimento e outro 
-   para produção)

11) Configurar ambientes de desenvolvimento e produção (webpack.config)
-   variáveis de ambiente: definem configurações de acordo com o ambiente
-   NODE_ENV:  identifica se o ambiente é de desenvolvimento ou produção
-   -> npm i cross-env -D (define variáveis de ambiente independentemente do 
-   S.O, pois pode variar.)
-   -> no package.json definir scripts para desenvolvimento e produção

12) Configurações para importação do CSS e SCSS 
-   no webpack.config, criar regra para a leitura adequada dos arquivos css / scss
-   

*/