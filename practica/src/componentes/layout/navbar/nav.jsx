import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css';
export const Nav = () => {
  return (
   <>
   
   
   <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand"> <strong>Tareas </strong></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        
        <li className="nav-item">
          <NavLink to="/articulos" className="nav-link" href="#"><b>Articulos</b></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/lista" className="nav-link" href="#"><b>Lista</b></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/articulosCompletados" className="nav-link" href="#"><b>Completados</b></NavLink>
        </li>
         <li className="nav-item">
          <NavLink to="/articulosNoCompletados" className="nav-link" href="#"><b>No-Completados</b></NavLink>
        </li>
          <li className="nav-item">
          <NavLink to="/FechaDeIngreso" className="nav-link" href="#"><b>Fecha-Ingreso</b></NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
   
   
   
   </>

  )
}
