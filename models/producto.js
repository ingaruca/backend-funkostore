const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let productoSchema = new Schema({
  categoria:String,
  nombre:String,
  precio:String,
  imagen:String
});

module.exports = mongoose.model('Producto', productoSchema);

