
import { conn } from '../libs/mysql';
import { useState, useEffect } from 'react';

export default function Delete() {
  const [properties, setProperties] = useState([]);
  const [propertyId, setPropertyId] = useState('');

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const [rows] = await conn.query('SELECT * FROM propiedades');
      setProperties(rows);
    } catch (error) {
      console.error('Error al obtener la lista de propiedades:', error);
    }
  };

  const handleDelete = async () => {
    if (!propertyId) {
      alert('Selecciona una propiedad para eliminar.');
      return;
    }

    try {
      await conn.query('DELETE FROM propiedades WHERE id = ?', [propertyId]);
      alert('Propiedad eliminada exitosamente.');
      fetchProperties();
    } catch (error) {
      console.error('Error al eliminar la propiedad:', error);
      alert('Hubo un error al eliminar la propiedad.');
    }
  };

  return (
    <div>
      <h1>Eliminar Propiedad</h1>
      <select value={propertyId} onChange={(e) => setPropertyId(e.target.value)}>
        <option value="">Selecciona una propiedad</option>
        {properties.map((property) => (
          <option key={property.id} value={property.id}>
            {property.Nombre} - {property.estado} - Precio: ${property.precioalquiler}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}
