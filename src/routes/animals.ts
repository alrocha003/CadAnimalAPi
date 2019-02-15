import * as express from 'express'

 const controller = require('../controller/animals');
 const router = express.Router()

 router.get('/animals/:id',controller.buscarUm)

 router.get('/animals',controller.buscarTodos)
 
 router.post('/animals',controller.criar)
 
 router.put('/animals/:id',controller.atualizar)

 router.delete('/animals/:id',controller.excluir)

 module.exports = router;
 