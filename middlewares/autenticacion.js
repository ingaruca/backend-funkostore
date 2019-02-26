const jwt = require('jsonwebtoken');

// ===================
// Verificar Token
// ===================
exports.verificaToken = (req, res, next) => {

  let token = req.get('token');

  jwt.verify(token, process.env.SEED, (err, decode) => {
    if (err) {
      return res.status(401).json({
        err: {
          mensaje: 'Token no válido'
        }
      })
    }

    req.usuario = decode.usuario;
    next();
  })

}