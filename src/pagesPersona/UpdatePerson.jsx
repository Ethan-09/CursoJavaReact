import { useState } from 'react';
import { updatePerson } from '../services/apiPersona.js'; 
import {Link} from 'react-router-dom';

const UpdatePerson = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurame] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePerson(id, name, surname);
    setId(''); 
    setName(''); 
    setSurame('');
  };

  return (
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/people">Consulta</Link></li>
      <li><Link to="/people/new">Alta</Link></li>
      <h1>Actualizar Persona/Modificacion</h1>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID de la persona"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nuevo nombre"
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurame(e.target.value)}
          placeholder="Nuevo Apellido"
        />
        <button onClick={handleSubmit}>Actualizar</button>
    </div>
  );
};

export default UpdatePerson;
