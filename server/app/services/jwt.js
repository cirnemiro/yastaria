const jwt = require('jwt-express');
const moment = require('moment');
const config = require('../config/jwt');

exports.createToken = function (user) {
    let userpayload = {
        _id: user._id,
        nombre: user.nombre,
        apellidos: user.apellidos,
        fechaNacimiento: user.fechaNacimiento,
        descripcion: user.descripcion,
        foto: user.foto,
        codigoPostal: user.codigoPostal,
        barrio: user.barrio,
        puntuacion: user.puntuacion,
        ofrece: user.ofrece,
        necesita: user.necesita,
        correo: user.correo,
        contra: user.contra
    };
    return jwt.create(config.TOKEN_SECRET, userpayload);
};

