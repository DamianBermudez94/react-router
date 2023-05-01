import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <span>Elige una de las siguientes opciones:</span>
        <nav>
            <ul>
                <NavLink to="/panel/inicio">Inicio</NavLink>
            </ul>
            <ul>
                <NavLink to="/panel/crear">Crear</NavLink>
            </ul>
            <ul>
                <NavLink to="/panel/gestion-usuarios">Gestion usuarios</NavLink>
            </ul>
            <ul>
                <NavLink to="/panel/acerda-de">Acerda de</NavLink>
            </ul>
        </nav>
        <div>
            {/*Contenedor donde se van a mostar las sub rutas*/}
            <Outlet/>
        </div>
    </div>
  )
}
