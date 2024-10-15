// backend/src/controllers/profesorController.js
const ProfesorModel = require('../models/profesorModel');

class ProfesorController {
  async getProfesores(req, res) {
    try {
      const profesores = await ProfesorModel.getProfesores();
      res.json(profesores);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener profesores', error: error.message });
    }
  }

  // Agregar profe 
  async postProfesores(req, res) {
    try {
      console.log("este depura che: " + JSON.stringify(req.body));

      // constante con valor que espera
      const { nombre } = req.body;


      // validar
      if (!nombre) {
        // retonrar erro
        return res.status(400).json({ error: 'Llenar espacio' });
      }


      const profesoresAgregar = await ProfesorModel.postProfesores(nombre);
      res.status(201).json({ profesoresAgregar, nombre });


    } catch (error) {
      res.status(500).json({ message: 'Error al obtener profesores', error: error.message });
    }
  }

}

module.exports = new ProfesorController();