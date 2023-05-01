import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h2>Error 404</h2>
        <strong>Pagina no encontrada</strong>
        <Link to="inicio">Volver a la pagina de inicio</Link>


    </div>
  )
}
