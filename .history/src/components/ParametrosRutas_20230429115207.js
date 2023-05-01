import React from 'react'
import { useParams } from 'react-router-dom'

export const ParametrosRutas = () => {
    // Valores de defectos
    // desestructuración de objeto
    const {nombre="Damian", apellido="Bermudez"} = useParams();
    console.log(nombre,apellido);

  return (
    <div>
        <h1>ParametrosRutas</h1>
        <strong>Este componente es para ver los parametros por URL</strong>
        <h3>Bienvenido: {nombre} {apellido}</h3>

    </div>
  )
}
