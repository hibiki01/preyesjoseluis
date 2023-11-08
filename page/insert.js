
import { conn } from '../libs/mysql';
import { useState } from 'react';

export default function Insert() {
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await conn.query('INSERT INTO propiedades (Nombre, estado, precioalquiler) VALUES (?, ?, ?)', [
        nombre,
        estado,
        precio,
      ]);
      alert('Propiedad insertada exitosamente.');
    } catch (error) {
      console.error('Error al insertar propiedad:', error);
      alert('Hubo un error al insertar la propiedad.');
    }
  };

  return (
    <div>
      <h1>Insertar Propiedad</h1>
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
    </div>
  );
}
