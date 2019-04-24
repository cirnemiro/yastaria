const router = require('express').Router();
const Chat = require('../models/chat');

router.route('/chat')

    .get(function (req, res) {

        Chat.find().then(chats => {
            res.json(chats);
        }).catch(err => {
            console.log('Error getting los mensajes del chat:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let chat = new Mensaje();

        chat.emisor = 5;
        chat.fecha = new Date();

        //como pasamos la id del receptor? Es necesario guardarla en el chat?
        chat.receptor = req.body.receptor;
        
        //Que nombre se le pasa al req para que se guarde el mensaje? chat1?
        chat.mensaje = req.body.chat1;

        chat.save().then(savedChat => {
            console.log('savedUser:', savedChat);

            if (savedChat) {
                res.json(savedChat);
            }
        }).catch(err => {
            console.log('Error saving new mascota:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });

router.route('/chat/:piemisor/:idreceptor')
    .get(function(req, res){
        // res.json({data:'Hola: '+req.params.pid});
        Chat.findById(req.params.pid).then(unChat => {
            res.json(unChat);
        }).catch(err => {
            console.log('Error getting un chat: '+req.params.pid, err);
            res.status(500).send({ message: 'Server error' });
        });
    });
module.exports = router;