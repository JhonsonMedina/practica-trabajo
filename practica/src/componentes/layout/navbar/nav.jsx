import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css';

export const Nav = () => {
  return (
   <>

   
   
   <nav className="navbar navbar-expand-md bg-info mb-4">
  <div className="container-fluid">
    <NavLink to="/"  className="navbar-brand"> Tareas </NavLink>
   <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
   </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item"><NavLink to="/articulos" className="nav-link"><b>Articulos</b></NavLink></li>
    <li className="nav-item"><NavLink to="/lista" className="nav-link"><b>Lista</b></NavLink></li>
    <li className="nav-item"><NavLink to="/articulosCompletados" className="nav-link"><b>Completados</b></NavLink></li>
    <li className="nav-item"><NavLink to="/articulosNoCompletados" className="nav-link"><b>No-Completados</b></NavLink></li>
    <li className="nav-item"><NavLink to="/FechaDeIngreso" className="nav-link"><b>Fecha-Ingreso</b></NavLink></li>
  </ul>
</div>
  </div>
</nav>
   
   
   
   </>

  )
}
