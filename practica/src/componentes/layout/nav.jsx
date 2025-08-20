import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
   <>
   
   
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand" >Navbar </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <NavLink to="/articulos" className="nav-link" href="#">Articulos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/lista" className="nav-link" href="#">Lista</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
   
   
   
   </>

  )
}
