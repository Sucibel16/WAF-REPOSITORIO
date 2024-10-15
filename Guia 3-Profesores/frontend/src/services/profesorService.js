// frontend/src/services/profesorService.js
const API_URL = 'http://localhost:3001/api';

export async function getProfesores() {
  const response = await fetch(`${API_URL}/profesores`);
  if (!response.ok) {
    throw new Error('Error al obtener los profesores');
  }
  return response.json();
}


