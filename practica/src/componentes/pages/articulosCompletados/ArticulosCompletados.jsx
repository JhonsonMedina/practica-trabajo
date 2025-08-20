import { useEffect, useState } from "react";

export const ArticulosCompletados = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = "http://localhost:3001/api/articulos";
    try {
      const peticion = await fetch(url, { method: "GET" });
      const datos = await peticion.json();
      if (datos.status === "success") {
        const filtrados = (datos.articulos || []).filter(
          (a) => a.estado === true || a.estado === 1
        );
        setArticulos(filtrados);
      } else {
        setArticulos([]);
      }
    } catch (e) {
      console.error(e);
      setArticulos([]);
    } finally {
      setLoading(false);
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

  const formatearVencimiento = (a) => {
    const v = a?.vencimiento;
    if (!v) return "Sin vencimiento";
    try {
      const d = new Date(v);
      if (Number.isNaN(d.getTime())) return v;
      return d.toLocaleDateString();
    } catch {
      return v;
    }
  };

  if (loading) return <p>Cargando...</p>;

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
                <p className="text-muted">
                  Vencimiento: {formatearVencimiento(articulo)}
                </p>
                <p className="text-muted">
                  Estado: Completado
                </p>
              </div>
            </article>
          );
        })
      ) : (
        <h1 className="text-center">No hay Articulos completados</h1>
      )}
    </>
  );
};
