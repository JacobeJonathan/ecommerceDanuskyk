'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'jonathanjacobe';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        nombres:user.nombres,
        apellidos:user.apellidos,
        email:user.email,
        iat: moment().unix(), //fecha de inicio
        exp:moment().add(7,'days').unix() //fecha de expiracion
    }

    return jwt.encode(payload,secret);
}