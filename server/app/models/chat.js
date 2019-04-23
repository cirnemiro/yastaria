const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;

const MensajeSchema   = new Schema({
    emisor:Number,
    fecha: String, 
    receptor: Number, 
    mensaje: String
});

module.exports = mongoose.model('Mensaje', MensajeSchema);