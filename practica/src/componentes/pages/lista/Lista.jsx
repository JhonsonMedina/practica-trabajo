import { useEffect, useState } from "react";

export const Lista = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = "http://localhost:3001/api/articulos";
    try {
      const peticion = await fetch(url, { method: "GET" });
      const datos = await peticion.json();
      if (datos.status === "success") {
        setArticulos(datos.articulos || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const formatearFecha = (f) => {
    if (!f) return "Sin fecha";
    try {
      const d = new Date(f);
      if (Number.isNaN(d.getTime())) return f;
      return d.toLocaleDateString();
    } catch {
      return f;
    }
  };

  return (
    <>
      {articulos.length > 0 ? (
        articulos.map((articulo) => {
          const idItem = articulo.id !== undefined ? articulo.id : articulo._id;
          return (
            <article key={idItem} className="articulo-item card mb-3">
              <div className="card-body">
                <h3 className="card-title">{articulo.titulo}</h3>
                <p className="card-text">{articulo.contenido}</p>
                <p className="text-muted">
                  Fecha de ingreso: {formatearFecha(articulo.fechaIngreso)}
                </p>
              </div>
            </article>
          );
        })
      ) : (
        <h1 className="text-center">No hay Articulos</h1>
      )}
    </>
  );
};