const router = require('express').Router();
const Chat = require('../models/chat');

router.route('/chat')

    .get(function (req, res) {

        Chat.find().then(chats => {
            res.json(chats);
        }).catch(err => {
            console.log('Error getting mascotas:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let mascota = new Mascota();

        mascota.nombre = req.body.nombre;
        mascota.foto = req.body.foto;
        mascota.edad = req.body.edad;

        mascota.save().then(savedMascota => {
            console.log('savedUser:', savedMascota);

            if (savedMascota) {
                res.json(savedMascota);
            }
        }).catch(err => {
            console.log('Error saving new mascota:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });

router.route('/mascotas/:pid')
    .get(function(req, res){
        // res.json({data:'Hola: '+req.params.pid});
        Mascota.findById(req.params.pid).then(aMascota => {
            res.json(aMascota);
        }).catch(err => {
            console.log('Error getting a mascota: '+req.params.pid, err);
            res.status(500).send({ message: 'Server error' });
        });
    });
module.exports = router;