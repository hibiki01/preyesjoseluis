
import React from 'react';

function PropertySelect({ properties, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Selecciona una propiedad</option>
      {properties.map((property) => (
        <option key={property.id} value={property.id}>
          {property.Nombre} - {property.estado} - Precio: ${property.precioalquiler}
        </option>
      ))}
    </select>
  );
}

export default PropertySelect;
