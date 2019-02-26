const Producto = require('../models/producto');

exports.Listar = (req, res) => {

  Producto.find( (err, productos) => {
    if (err) {
      res.status(500).json({
        mensaje: 'Error al listar los productos'
      })
    } else {
      res.status(200).json(productos)
    }
  });
}

exports.CargarData = () => {
   
  for(let i = 1; i < 11; i ++){
    let productosMarvel = new Producto();
    productosMarvel.categoria = 'Marvel'
    productosMarvel.nombre = 'Marvel ' + i;
    productosMarvel.precio = generarPrecio();
    productosMarvel.imagen = 'http://localhost:3000/images/marvel'+i+'.jpg';    
    productosMarvel.save();
  }

  for(let i = 1; i < 11; i ++){
    let productosDC = new Producto();
    productosDC.categoria = 'DC'
    productosDC.nombre = 'DC ' + i;
    productosDC.precio = generarPrecio();
    productosDC.imagen = 'http://localhost:3000/images/dc'+i+'.jpg';    
    productosDC.save();
  }

  for(let i = 1; i < 11; i ++){
    let productosAnime = new Producto();
    productosAnime.categoria = 'Anime'
    productosAnime.nombre = 'Anime ' + i;
    productosAnime.precio = generarPrecio();
    productosAnime.imagen = 'http://localhost:3000/images/anime'+i+'.jpg';    
    productosAnime.save();
  }

}

function generarPrecio() {
  return Math.round((Math.random()*(50-30)+parseInt(30))).toString();
}