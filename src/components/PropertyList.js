// src/components/PropertyList.js
import React from 'react';

function PropertyList({ properties }) {
  return (
    <ul>
      {properties.map((property) => (
        <li key={property.id}>
          {property.Nombre} - Estado: {property.estado} - Precio de alquiler: ${property.precioalquiler}
        </li>
      ))}
    </ul>
  );
}

export default PropertyList;
