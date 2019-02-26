const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es necesario']
  },
  correo: {
    type: String,
    unique: true,
    required: [true, 'El correo es necesario']
  },
  clave: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  celular: String,
  direccion: String,
  nacimiento: {
    type: String,
    required: [true, 'La fecha de nacimiento es necesaria']
  }
});

usuarioSchema.methods.toJSON = function() {
  let usuario = this;
  let usuarioObject = usuario.toObject();
  delete usuarioObject.clave;

  return usuarioObject;
}

usuarioSchema.plugin(uniqueValidator, {
  message: '{PATH} debe ser unico'
});

module.exports = mongoose.model('Usuario', usuarioSchema);