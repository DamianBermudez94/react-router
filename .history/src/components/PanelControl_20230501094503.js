import React from 'react'
import { NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <nav>
            <ul>
                <NavLink to={"/inicio"}>Inicio</NavLink>
            </ul>
            <ul>
                <NavLink to={"/crear"}>Crar</NavLink>
            </ul>
            <ul>
                <NavLink to={"/gestion-usuarios"}>Gestion usuarios</NavLink>
            </ul>
            <ul>
                <NavLink to={"/acerda-de"}>Acerda de</NavLink>
            </ul>
        </nav>
    </div>
  )
}
