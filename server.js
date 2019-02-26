require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const usuarioRoute = require('./routes/usuario');
const loginRoute = require('./routes/login');
const productoRoute = require('./routes/producto');
const middleware = require('./middlewares/autenticacion');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( {extended:false} ));
app.use(bodyParser.json());

const router = express.Router();
router.route('/usuario')
.get(usuarioRoute.ObtenerUsuarios)
.post(usuarioRoute.RegistrarUsuario);

router.route('/login')
.post(loginRoute.Login);

router.route('/productos')
.get(middleware.verificaToken, productoRoute.Listar)
.post(middleware.verificaToken, productoRoute.CargarData);

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log('Base de datos ONLINE');
});

mongoose.set('useCreateIndex', true);

app.use('/api', router);
app.use(express.static('public'));

app.listen(process.env.PORT, () => {
  console.log(`Escuchando puerto ${process.env.PORT}`);
});