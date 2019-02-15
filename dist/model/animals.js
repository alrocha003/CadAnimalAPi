"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _sequelizeLib = require("sequelize");
const _sequelizeCFG = require('../database/database');
const Animals = _sequelizeCFG.define('animals', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: _sequelizeLib.INTEGER
    },
    name: {
        allowNull: false,
        type: _sequelizeLib.STRING(30),
        validate: {
            len: [2, 30]
        }
    },
    idade: {
        allowNull: false,
        type: _sequelizeLib.INTEGER
    }
});
module.exports = Animals;
