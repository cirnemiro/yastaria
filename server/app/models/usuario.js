const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;

const UsuarioSchema   = new Schema({
    id: Number, 
    nombre: String, 
    apellidos: String, 
    genero: String,
    fechaNacimiento: String,
    descripcion: String, 
    foto: String, 
    codigoPostal: Number,
    barrio: String,
    puntuacion: Number,
    ofrece: [String],
    necesita: [String],
    tema: String,
    correo: {
        type: String,
        required: true,
        unique: true //[true, 'Email already used']
    },
    contra:String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);