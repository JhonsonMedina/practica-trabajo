import { useEffect, useState } from 'react';

export const ArticulosList = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async() => {
    const url = "http://localhost:3001/api/articulos";
    let peticion = await fetch(url ,{
     method: "GET"
    });
    let datos = await peticion.json();

    if(datos.status ==="success"){
      setArticulos(datos.articulos)
    }

  }
  

  return (
    <>
    {articulos.length > 0 ? (
        articulos.map((articulo) => (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara" />
            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>
            </div>
            <div className="acciones">
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        ))
      ) : (
        <h1>No hay Articulos</h1>
      )}
   </>
  );
};
