'use strict'

var express =  require('express');
var adminController = require('../controllers/AdminController');

//gestiona la funcion es decir un metodo post

var api = express.Router();
api.post('/registro_admin',adminController.registro_admin);
api.post('/login_admin',adminController.login_admin);


module.exports = api;