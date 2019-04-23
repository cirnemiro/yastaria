const router = require('express').Router();
const Usuario = require('../models/usuario');

router.route('/usuarios')

    .get(function (req, res) {

        Usuario.find().then(usuarios => {
            res.json(usuarios);
        }).catch(err => {
            console.log('Error getting usuarios:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let usuario = new Usuario();

        usuario.nombre = req.body.nombre;
        usuario.apellidos = req.body.apellidos;
        
        usuario.genero = req.body.genero;
        usuario.fechaNacimiento = req.body.fechaNacimiento;
        usuario.descripcion = req.body.descripcion;
        usuario.foto = req.body.foto;
        usuario.codigoPostal = req.body.codigoPostal;
        usuario.barrio = req.body.barrio;

        usuario.puntuacion = req.body.puntuacion;
        usuario.ofrece = req.body.ofrece;
        usuario.necesita = req.body.necesita;

        usuario.correo = req.body.correo;
        usuario.contra = req.body.contra;

        Usuario.findOne({ correo: usuario.correo }).then(aUsuario => {
            if (aUsuario) {
                res.status(409).send({ message: 'This email already exists' });
                aUsuario = null;
            } else { aUsuario = usuario; }

            return aUsuario;
        }).then(aUsuario => {
            if (aUsuario) aUsuario.save();

            return aUsuario;
        }).then(usuarioGuardado => {
            console.log('usuarioGuardado:', usuarioGuardado);

            if (usuarioGuardado) {
                res.json(usuarioGuardado);
            }
        }).catch(err => {
            console.log('Error saving new user:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });


module.exports = router;