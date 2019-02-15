# CadAnimal API

A api CadAnimal utiliza a tecnologia node.js para criar um crud básico de Produtos.

A APi possui 5 endpoints que exepoem dados e efetuam operações nos dados que estão gravados no banco de dados MySql

#### As rotas da API são:
* '/', - controller.get = Obtem todos os registros de produtos cadastrados
* '/:id' - controller.getById = Obtem um registro de produto por Id
* '/:product' - controller.create = Cria um novo registro de produto
* '/:id' - controller.delete = Exclui do banco um registro de produto
* '/product' - controller.put = Atualiza um registro de produto no banco 

### Tecnologias utilizadas
* Framerk para ORM :  Sequelize
* Banco de dados : MySql
* Linguagem : TypeScript
* Node.Js

**Para atualizar os arquivos JavaScript, ao se alterar um arquivo TypeScript, deve se rodoar na pasta raiz do projeto : node_modules/.bin/tsc**

**Para rodar o projeto, basta ir na pasta dist, e rodar : node app.js**

Deve se ter um banco Mysql configurado, igual a aplicação solicita, o script da base de dados, esta junto ao projeto.
