import { NextResponse } from "next/server";
import { conn } from "../../../libs/mysql";

export async function GET(){

    try {
        // Realiza una consulta a la base de datos para obtener los productos
        const results = await conn.query('SELECT * FROM productos');
    
        // Devuelve una respuesta JSON con los resultados
        return new Response(JSON.stringify(results), {
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        // En caso de error, devuelve una respuesta con un mensaje de error
        return new Response(JSON.stringify({ error: "Error al obtener la lista de productos" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

}