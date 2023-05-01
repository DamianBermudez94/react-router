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

         {/*Contenedor donde se van a mostar las sub rutas*/}
        <div>
           {/*Outlet: Sirve para establecer un slot o espacio vacío dentro de un componente para poder renderizar el resultado de una rura*/}
            <Outlet/>
        </div>
    </div>
  )
}
