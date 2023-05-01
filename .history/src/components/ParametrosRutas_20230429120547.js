import React from 'react'
import { useParams } from 'react-router-dom'

export const ParametrosRutas = () => {
    // Valores de defectos
    // desestructuración de objeto
    const {nombre="Damian", apellido="Bermudez"} = useParams();
    console.log(nombre,apellido);

  return (
    <div>
        {!nombre && <h1>Esta pagina no tiene niguna persona</h1>}
        {nombre &&  <h3>Bienvenido: {nombre} {apellido}</h3>}
        <h1>ParametrosRutas</h1>
        <strong>Este componente es para ver los parametros por URL</strong>
       

    </div>
  )
}
