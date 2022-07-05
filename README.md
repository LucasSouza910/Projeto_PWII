# Instruções

Alterar informações referentes a conexão com o banco de dados (controller/SQL/db.js) e (controller/SQL/Sequelize/dborm.js).

Baixar seguintes pacotes (se copiar e colar com o botão direito do mouse no terminal do vscode, todos instalarão de uma vez só, exceto o ultimo que deve ser instalado manualmente):

    npm install cjs-module
    npm install body-parser
    npm install nodemon -g
    npm install consign
    npm install ejs
    npm install express --save
    npm install sha1
    npm install mysql2
    npm install passport
    npm install passport-local
    npm install express-session

Executar seguinte script no MySQL Workbench:

    create database webii;

    create table webii.usuario(
        id int auto_increment primary key,
        nome varchar(255) not null,
        senha varchar(255) not null
    );

    create table webii.produto(
        id int auto_increment primary key,
        nome varchar(255) not null,
        preco varchar(12) not null
    );

Por fim, executar 
    node index.js
dentro do projeto.