// frontend/src/App.jsx

import React, { useState, useEffect } from 'react'; import ProfesoresList from './components/ProfesoresList';
import CreateUserProfesor from './components/CreateUserProfesor';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [profesores, setProfesores] = useState([]);

  const addProfesores = (profesor) => {
    setProfesores((prevProfesor) => [...prevProfesor, profesor]);
  };

  return (
    <div className="App">
      <CreateUserProfesor addProfesores={addProfesores} />
      <ProfesoresList />
    </div>
  );
}

export default App;