// backend/src/models/profesorModel.js
const db = require('../config/database');

class ProfesorModel {
  static async getProfesores() {
    const [rows] = await db.execute('SELECT nombre FROM profesores');
    return rows;
  }

  // Funciona para agregar nuevo profe
  static async postProfesores(nombre) {
    const rows = await db.execute('INSERT INTO profesores (nombre) VALUES (?)', [nombre]);
    return rows;

  }


}

module.exports = ProfesorModel;