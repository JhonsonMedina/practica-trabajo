import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "../componentes/layout/header/header.jsx";
import { Nav } from "../componentes/layout/navbar/nav.jsx";
import { Footer } from "../componentes/layout/footer/footer.jsx";
import { ArticulosCompletados } from "../componentes/pages/articulosCompletados/ArticulosCompletados.jsx";
import { Lista } from "../componentes/pages/lista/Lista.jsx";
import { ArticulosList } from "../componentes/pages/articulos/ArticulosList.jsx";
import { ArticulosNoCompletados } from "../componentes/pages/articulosNoCompletados/ArticulosNoCompletados.jsx";
import { FechaDeIngreso } from "../componentes/pages/fechaDeIngreso/FechadeIngreso.jsx";

function AppLayout() {
  return (
    <>
      <Header />
      <Nav />
      <section id="content" className="content">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <ArticulosList /> },
        { path: "/articulos", element: <ArticulosList /> },
        { path: "/articulosCompletados", element: <ArticulosCompletados /> },
        { path: "/articulosNoCompletados", element: <ArticulosNoCompletados /> },
        { path: "/lista", element: <Lista /> },
        { path: "/fechaDeIngreso", element: <FechaDeIngreso /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export const Rutas = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    />
  );
};

