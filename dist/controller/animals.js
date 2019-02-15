const _animals = require('../model/animals');
exports.buscarUm = (req, res, next) => {
    let id = req.params.id;
    console.log('chegou no buscar um');
    console.log(id);
    _animals.findById(id)
        .then(animals => {
        if (animals) {
            res.send(animals);
        }
        else {
            res.status(404).send();
        }
    })
        .catch(error => next(error));
};
exports.buscarTodos = (req, res, next) => {
    console.log('chegou no busca todos');
    let limite = parseInt(req.query.limite || 0);
    let pagina = parseInt(req.query.pagina || 0);
    if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
        res.status(400).send();
    }
    const ITENS_POR_PAGINA = 10;
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;
    _animals.findAll({ limit: limite, offset: pagina })
        .then(animals => {
        res.send(animals);
    })
        .catch(error => next(error));
};
exports.criar = (req, res, next) => {
    console.log('chegou no criar');
    console.log(req.body);
    console.log(req.body['name']);
    let name = req.body['name'];
    let idade = req.body['idade'];
    _animals.create({ name: name, idade: idade })
        .then(() => {
        res.status(201).send();
    })
        .catch(error => next(error));
};
exports.atualizar = (req, res, next) => {
    console.log('chegou no atualizar');
    const id = req.params.id;
    let name = req.body['name'];
    let idade = req.body['idade'];
    _animals.findById(id).then((animals) => {
        if (animals) {
            _animals.update({
                name: name,
                idade: idade
            }, { where: { id: id } }).then(() => {
                res.send();
            }).catch((error) => next(error));
        }
        else {
            res.status(404).send();
        }
    }).catch((error) => next(error));
};
exports.excluir = (req, res, next) => {
    console.log('chegou no deletas');
    const id = req.params.id;
    _animals.findById(id).then((animals) => {
        if (animals) {
            _animals.destroy({
                where: { id: id }
            }).then(() => {
                res.send();
            }).catch((error) => next(error));
        }
        else {
            res.status(404).send();
        }
    }).catch((error) => next(error));
};
