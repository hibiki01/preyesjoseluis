
import { conn } from '../libs/mysql';

export default function List({ properties }) {
  return (
    <div>
      <h1>Listado de Propiedades</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.Nombre} - {property.estado} - Precio: ${property.precioalquiler}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const [rows] = await conn.query('SELECT * FROM propiedades');
    return {
      props: { properties: rows },
    };
  } catch (error) {
    console.error('Error al obtener la lista de propiedades:', error);
    return {
      props: { properties: [] },
    };
  }
}
