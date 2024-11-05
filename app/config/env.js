// env.js

module.exports = {
    database: 'to_do',       // Nombre de la base de datos
    username: 'min_todo',    // Nombre de usuario de la base de datos
    password: '1234',        // Contraseña para la base de datos
    host: 'localhost',       // Host de la base de datos
    dialect: 'mysql',        // Dialecto para Sequelize
    pool: {
      max: 5,                // Número máximo de conexiones
      min: 0,                // Número mínimo de conexiones
      acquire: 30000,        // Tiempo de espera máximo para adquirir una conexión
      idle: 10000            // Tiempo que una conexión puede estar inactiva antes de ser liberada
    },
    ssl: {
      require: false,        // Conexión SSL no requerida para localhost
      rejectUnauthorized: false
    }
  };
  