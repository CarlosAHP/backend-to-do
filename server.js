const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./app/config/database');  // Ajusta la ruta a donde tienes `database.js`

// Opciones de CORS
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

// Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Autenticación y Sincronización de la Base de Datos
db.sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
    return db.initialize();  // Sincroniza las tablas y carga datos iniciales si se define
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
  });

// Rutas
const router = require('./app/routers/router');  // Ajusta la ruta a donde tienes `router.js`
app.use('/', router);

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Crear el servidor en el puerto 4000
const server = app.listen(4000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App escuchando en http://%s:%s", host, port);
});
