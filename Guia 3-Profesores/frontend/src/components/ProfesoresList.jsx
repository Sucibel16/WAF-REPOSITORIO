import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

function ProfesoresList() {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    const fetchProfesores = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/profesores");
        setProfesores(res.data);
      } catch (error) {
        console.error("Error al obtener los profesores: ", error);
        toast.error("Error al obtener los profesores");
      }
    };

    fetchProfesores();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Profesores</h2>
      <div className="d-flex justify-content-center">
        <table className="table table-bordered" style={{ maxWidth: "600px" }}>
          <thead className="table-dark">
            <tr>
              
              <th scope="col">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {profesores.map((profesor) => (
              <tr key={profesor.id}>
                <td>{profesor.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfesoresList;
