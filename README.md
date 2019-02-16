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
