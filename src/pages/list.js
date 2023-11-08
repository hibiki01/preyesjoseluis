// src/pages/list.js
import React, { useState, useEffect } from 'react';
import PropertyList from '../components/PropertyList';

// Estilos en línea (CSS en línea)
const pageStyle = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
};

function List() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simular la obtención de propiedades desde una API o base de datos.
    const fakeProperties = [
      { id: 1, Nombre: 'Propiedad 1', estado: 'Libre', precioalquiler: 1000 },
      { id: 2, Nombre: 'Propiedad 2', estado: 'Ocupada', precioalquiler: 1500 },
      // Agregar más propiedades simuladas...
    ];

    setProperties(fakeProperties);
  }, []);

  return (
    <div style={pageStyle}>
      <h1 style={{ color: 'blue' }}>Listado de Propiedades</h1>
      <PropertyList properties={properties} />
    </div>
  );
}

export default List;
