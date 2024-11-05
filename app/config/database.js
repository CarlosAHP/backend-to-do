// database.js

const Sequelize = require('sequelize');
const env = require('./env.js');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: env.ssl.require,
      rejectUnauthorized: env.ssl.rejectUnauthorized,
    },
  },
  pool: env.pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importación de modelos (aquí puedes agregar más modelos si los tienes en la carpeta `models`)
db.Proyecto = require('../models/proyecto.model.js')(sequelize, Sequelize);

// Función para inicializar la base de datos con datos predefinidos (opcional)
db.initialize = async () => {
  await sequelize.sync({ force: true }); // Sincroniza la base de datos y crea las tablas.
  console.log('Tablas sincronizadas correctamente.');

  // Puedes agregar datos iniciales aquí si lo necesitas.
};

module.exports = db;
