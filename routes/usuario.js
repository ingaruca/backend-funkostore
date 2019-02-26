const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

exports.ObtenerUsuarios = (req, res) => {
  Usuario.find( (err, usuarios) => {
    if (err) {
      res.status(500).json({
        mensaje: 'Error al obtener usuarios'
      });
    } else {
      res.status(200).json(usuarios);
    }
  });
}

exports.RegistrarUsuario = (req, res) => {
  let body = req.body;
  let usuarioDB = new Usuario({
    nombre: body.nombre,
    apellido: body.apellido,
    correo: body.correo,
    clave: bcrypt.hashSync(body.clave, 10),
    celular: body.celular,
    direccion: body.direccion,
    nacimiento: body.nacimiento
  });

  usuarioDB.save( err => {
    if (err) {
      res.status(500).json({
        mensaje: 'Error al registrar al usuario',
        err
      });
    } else {
      res.status(200).json({
        mensaje: 'Usuario registrado correctamente'
      });
    }
  });

}