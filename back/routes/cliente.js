'use strict'

var express =  require('express');
var clienteController = require('../controllers/ClienteController');

//gestiona la funcion es decir un metodo post

var api = express.Router();
api.post('/registro_cliente',clienteController.registro_cliente);
api.post('/login_cliente',clienteController.login_cliente);
module.exports = api;