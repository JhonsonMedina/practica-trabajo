import { useEffect, useState } from "react";

export const ArticulosList = () => {
  const [articulos, setArticulos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitulo, setEditTitulo] = useState("");
  const [editContenido, setEditContenido] = useState("");
  const [editFechaIngreso, setEditFechaIngreso] = useState("");

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

  const empezarEditar = (id, currentTitulo, currentContenido, currentFechaIngreso) => {
    setEditingId(id);
    setEditTitulo(currentTitulo);
    setEditContenido(currentContenido);
    const fechaISO = currentFechaIngreso
      ? new Date(currentFechaIngreso).toISOString().slice(0, 10)
      : "";
    setEditFechaIngreso(fechaISO);
  };

  const actualizarArticulo = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/articulos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: editTitulo,
          contenido: editContenido,
          fechaIngreso: editFechaIngreso || null,
        }),
      });
      const data = await res.json();

      if (data.status === "success") {
        if (data.item) {
          setArticulos((prev) =>
            prev.map((a) => {
              const pk = a.id !== undefined ? a.id : a._id;
              return pk === id ? { ...a, ...data.item } : a;
            })
          );
        } else {
          setArticulos((prev) =>
            prev.map((a) => {
              const pk = a.id !== undefined ? a.id : a._id;
              return pk === id
                ? {
                    ...a,
                    titulo: editTitulo,
                    contenido: editContenido,
                    fechaIngreso: editFechaIngreso || null,
                  }
                : a;
            })
          );
        }
        setEditingId(null);
      } else {
        console.error("Error al actualizar");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const borrarArticulo = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/articulos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.status === "success") {
        setArticulos((prev) =>
          prev.filter((a) => {
            const pk = a.id !== undefined ? a.id : a._id;
            return pk !== id;
          })
        );
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
          const isEditing = editingId === idItem;
          return (
            <article key={idItem} className="articulo-item card mb-3">
              <div className="card-body">
                {isEditing ? (
                  <div className="mb-3 row g-2 align-items-center">
                    <label className="col-12 col-sm-2 col-form-label">Título</label>
                    <div className="col-12 col-sm-10">
                      <input
                        className="form-control"
                        value={editTitulo}
                        onChange={(e) => setEditTitulo(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <h3 className="card-title">{articulo.titulo}</h3>
                )}

                {isEditing ? (
                  <div className="mb-3 row g-2">
                    <label className="col-12 col-sm-2 col-form-label">Contenido</label>
                    <div className="col-12 col-sm-10">
                      <textarea
                        className="form-control"
                        rows={3}
                        value={editContenido}
                        onChange={(e) => setEditContenido(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="card-text">{articulo.contenido}</p>
                )}

                {isEditing ? (
                  <div className="mb-3 row g-2 align-items-center">
                    <label className="col-12 col-sm-2 col-form-label">Fecha de ingreso</label>
                    <div className="col-12 col-sm-10">
                      <input
                        type="date"
                        className="form-control"
                        value={editFechaIngreso}
                        onChange={(e) => setEditFechaIngreso(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-muted">
                    Fecha de ingreso: {formatearFecha(articulo.fechaIngreso)}
                  </p>
                )}

                <div className="row g-2 align-items-center">
                  <div className="col-auto">
                    {isEditing ? (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() => actualizarArticulo(idItem)}
                        >
                          Guardar
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => setEditingId(null)}
                        >
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-outline-primary"
                        onClick={() =>
                          empezarEditar(
                            idItem,
                            articulo.titulo,
                            articulo.contenido,
                            articulo.fechaIngreso
                          )
                        }
                      >
                        Editar
                      </button>
                    )}
                  </div>

                  <div className="col-auto">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => borrarArticulo(idItem)}
                    >
                      Borrar
                    </button>
                  </div>
                </div>
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