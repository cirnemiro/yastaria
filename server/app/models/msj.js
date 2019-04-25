const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const MensajesSchema   = new Schema({
    idOrig: String,
    idDest: String,
    texto: String,
    fecha: String    
});

module.exports = mongoose.model('Msj', MensajesSchema);
