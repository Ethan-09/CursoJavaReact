import { useState } from 'react';
import { savePersonName } from '../services/apiPersona.js'; 
import {Link} from 'react-router-dom';

const AddPerson = () => {
  const [name, setName] = useState('');
  const [surName, setSurname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await savePersonName({ nombre: name ,apellidos: surName });
    setName(''); 
    setSurname('');
  }

  return (
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/people">Consulta</Link></li>
      <li><Link to="/people/update">Modificacion</Link></li>
      <h1>Agregar Persona</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre de la persona"
        />
        <input
          type="text"
          value={surName}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Apellido de la persona"
        />
        
        <button onClick= {handleSubmit}>Agregar</button>
      
    </div>
  );
};

export default AddPerson;