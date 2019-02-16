# CadAnimal API

A api CadAnimal utiliza a tecnologia node.js para criar um crud básico de Animais

A APi possui 5 endpoints que exepoem dados e efetuam operações nos dados que estão gravados no banco de dados MySql

#### As rotas da API são:
* '/api/animals/', - controller.get = Obtem todos os registros de Animal cadastrados  [GET]
* '/api/animals/:id' - controller.getById = Obtem um registro de Animal por Id	      [GET]
* '/api/animals/' - controller.create = Cria um novo registro de Animal               [POST]
* '/api/animals/:id' - controller.delete = Exclui do banco um registro de Animal      [DELETE]
* '/api/animals/:id' - controller.put = Atualiza um registro de Animal no banco       [PUT]

### Tecnologias utilizadas
* Framerk para ORM :  Sequelize
* Banco de dados : MySql
* Linguagem : TypeScript
* Node.Js

**Para atualizar os arquivos JavaScript, ao se alterar um arquivo TypeScript, deve se rodar na pasta raiz do projeto : node_modules/.bin/tsc**

**Para rodar o projeto, basta ir na pasta dist, e rodar : node app.js**

Deve se ter um banco Mysql configurado, igual a aplicação solicita, o script da base de dados, esta junto ao projeto.


## Sequelize
O Sequelize é um ORM(Object/Relational Mapper) baseado em Promise para Node.js e io.js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais.
Ele possui um mecanismo de migração muito poderoso que pode transformar um esquema existente de banco de dados em uma nova versão e também fornece mecanismos de sincronização de banco de dados que podem criar estrutura de banco de dados especificando a estrutura do modelo.

## MySql
O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo

## TypeScript
TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. 
Anders Hejlsberg, arquiteto da linguagem C# e criador das linguagens Delphi e Turbo Pascal, trabalhou no desenvolvimento do TypeScript

## Node.Js
Node.js é um interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores. Seu objetivo é ajudar programadores na criação de aplicações de alta escalabilidade (como um servidor web), com códigos capazes de manipular dezenas de milhares de conexões simultâneas, numa única máquina física.

