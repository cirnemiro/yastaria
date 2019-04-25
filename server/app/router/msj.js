const router = require('express').Router();
const Msj = require('../models/msj');


router.route('/mensajes')
    .get(function (req, res) {

        Msj.find().then(mensajes => {
            res.json(mensajes);
        }).catch(err => {
            console.log('Error getting mensajes:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let mensaje = new Msj();
        mensaje.idOrig = req.body.idOrig;
        mensaje.idDest = req.body.idDest;
        mensaje.texto = req.body.texto;
        mensaje.msgHora = req.body.msgHora;

        console.log('mensaje:', mensaje);

        mensaje.save().then(savedMsj => {
            console.log('savedVote:', savedMsj);

            if (savedMsj) {
                res.json(savedMsj);
            }
        }).catch(err => {
            console.log('Error saving new Msj:', err);
            res.status(500).send({ message: 'Server error' });
        })

    });

router.route('/mensajes/:user_orig')
    .get(function (req, res) {
        //res.json({data: 'hola:'+req.params.pid});
        Msj.findById(req.params.user_orig).then(aMsj => {
            res.json(aMsj);
        }).catch(err => {
            console.log('Error getting mensajes:user_orig', err);
            res.status(500).send({ message: 'Server error' });
        });
    });

router.route('/mensajes/:user_orig/:user_dest')
    .get(function (req, res) {
        //res.json({data: 'hola:'+req.params.pid});
        Msj.findById(req.params.user_orig).then(aMsj => {
            res.json(aMsj);
        }).catch(err => {
            console.log('Error getting mensajes:user_orig/:user_dest', err);
            res.status(500).send({ message: 'Server error' });
        });
    });

module.exports = router;