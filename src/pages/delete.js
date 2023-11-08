// src/pages/delete.js
import React, { useState } from 'react';
import PropertySelect from '../components/PropertySelect';

const pageStyle = {
  backgroundColor: '#ffe6e6',
  padding: '20px',
};

function Delete() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState('');

  const handleDelete = () => {
    // Simular la eliminación de una propiedad en la base de datos.
    // Actualizar la lista de propiedades, etc.
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: 'red' }}>Eliminar Propiedad</h1>
      <PropertySelect properties={properties} value={selectedProperty} onChange={setSelectedProperty} />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default Delete;
