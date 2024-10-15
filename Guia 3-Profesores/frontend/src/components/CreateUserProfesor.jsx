import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

function CreateUserProfesores({ addProfesores }) {
  const [nombre, setNombre] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCreateProfesores = async (event) => {
    event.preventDefault();

    if (!nombre) {
      toast.error("Llenar todos los campos");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/api/profesores", {
        nombre,
      });

      if (res.status === 201) {
        toast.success("Profesor creado");
        addProfesores(res.data);
        setNombre("");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error en la creación del profesor: ", error);
      toast.error("Error en la creación del profesor");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Agregar Profesor</h2>
        <form onSubmit={handleCreateProfesores}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Ex: John Doe"
              value={nombre}
              onChange={handleNombreChange}
              style={{
                borderColor: "#28a745",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            style={{
              backgroundColor: "#28a745",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Crear profesor
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUserProfesores;
