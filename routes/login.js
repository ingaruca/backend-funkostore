const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Login = (req, res) => {
  let body = req.body;

  Usuario.findOne({correo: body.correo}, (err, usuarioDB) => {
    if (err) {
      return res.status(500).json({
        error: err
      })
    }
    if (!usuarioDB) {
      return res.status(400).json({
        mensaje: 'USUARIO o Contraseña incorrectos'
      })
    }
    if (!bcrypt.compareSync(body.clave, usuarioDB.clave)) {
      return res.status(400).json({
        mensaje: 'Usuario o CONTRASEÑA incorrectos'
      })
    }

    let token = jwt.sign({
      usuario: usuarioDB
    }, process.env.SEED, {expiresIn: process.env.CADUCIDAD_TOKEN});

    res.json({
      mensaje: 'Autenticación correcta',
      usuario: usuarioDB,
      token
    })
  });
}