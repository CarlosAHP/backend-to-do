const db = require('../config/database'); // Importa la configuración de la base de datos
const Proyecto = db.Proyecto;             // Importa el modelo Proyecto

// Crear un nuevo proyecto
exports.create = async (req, res) => {
  try {
    const proyecto = await Proyecto.create(req.body);
    res.status(201).json(proyecto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los proyectos
exports.retrieveAll = async (req, res) => {
  try {
    const proyectos = await Proyecto.findAll();
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un proyecto por ID
exports.getById = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      res.status(200).json(proyecto);
    } else {
      res.status(404).json({ error: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un proyecto
exports.update = async (req, res) => {
  try {
    const [updated] = await Proyecto.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedProyecto = await Proyecto.findByPk(req.params.id);
      res.status(200).json(updatedProyecto);
    } else {
      res.status(404).json({ error: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un proyecto
exports.delete = async (req, res) => {
  try {
    const deleted = await Proyecto.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();  // Responde con éxito sin contenido
    } else {
      res.status(404).json({ error: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
