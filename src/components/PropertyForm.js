// src/components/PropertyForm.js
import React, { useState } from 'react';

function PropertyForm({ onInsert }) {
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onInsert({ nombre, estado, precio });
    setNombre('');
    setEstado('');
    setPrecio('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Estado:
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="Libre">Libre</option>
          <option value="Ocupada">Ocupada</option>
          <option value="Mantenimiento">Mantenimiento</option>
        </select>
      </label>
      <label>
        Precio de Alquiler:
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      </label>
      <button type="submit">Insertar</button>
    </form>
  );
}

export default PropertyForm;
