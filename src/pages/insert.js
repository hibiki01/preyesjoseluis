// src/pages/insert.js
import React, { useState } from 'react';
import PropertyForm from '../components/PropertyForm';

const pageStyle = {
  backgroundColor: '#e6f7ff',
  padding: '20px',
};

function Insert() {
  const [properties, setProperties] = useState([]);

  const handleInsert = (newProperty) => {
    
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: 'green' }}>Insertar Propiedad</h1>
      <PropertyForm onInsert={handleInsert} />
    </div>
  );
}

export default Insert;
