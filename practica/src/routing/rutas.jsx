import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { TodoList } from "../componentes/pages/todolist/TodoList.jsx";
import { Header } from "../componentes/layout/header.jsx";
import { Nav } from "../componentes/layout/nav.jsx";
import { Lateral } from "../componentes/layout/lateral.jsx";
import { Footer } from "../componentes/layout/footer.jsx";
import { TodoForm } from "../componentes/pages/todoform/TodoForm.jsx";
import { Lista } from "../componentes/pages/lista/Lista.jsx";
import { ArticulosList } from "../componentes/pages/articulos/ArticulosList.jsx";

function AppLayout() {
  return (
    <>
      <Header />
      <Nav />
      <section id="content" className="content">
        <Outlet />
      </section>
      <Lateral />
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <TodoList /> },
        { path: "/todolist", element: <TodoList /> },
        { path: "/articulos", element: <ArticulosList /> },
        { path: "/todoform", element: <TodoForm /> },
        { path: "/lista", element: <Lista /> },
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