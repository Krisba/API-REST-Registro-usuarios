require('dotenv').config();

const app = require('./app');

const db = require("./app/database/dbConnection");

const sequelize = db.sequelize;


const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`Iniciando en puerto ${process.env.PORT}!`);
})

sequelize
.authenticate()
.then(() => {
  console.log('Conexión a base de datos establecida correctamente.');
})
.catch((error) => {
  console.error('No se ha podido conectar a la base de datos', error);
});

process.on('SIGTERM', () => {
  console.info('Señal SIGTERM recibida.');
  console.log('Cerrando servidor HTTP.');
  server.close(() => {
    console.log('Servidor HTTP cerrado.');
    sequelize.close().then( 
      console.log('Conexión a la base de datos cerrada'));
      process.exit(0);
    });
  });