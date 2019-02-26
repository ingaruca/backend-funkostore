// ===================
// Puerto
// ===================
process.env.PORT = 3000;

// ===================
// Vencimiento del Token
// ===================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===================
// SEED de autenticación
// ===================
process.env.SEED = 'este-es-el-seed-desarrollo';


// ===================
// Base de datos
// ===================
process.env.URLDB = 'mongodb://localhost:27017/funkostore';
