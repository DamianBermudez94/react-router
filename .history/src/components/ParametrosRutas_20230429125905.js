import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ParametrosRutas = () => {
    // Valores por defectos parametros opcionales
    // desestructuración de objeto
    const {nombre="Damian", apellido="Bermudez"} = useParams();
    console.log(nombre,apellido);

    // Uso del hook useNavigate
    const navegar = useNavigate();
    const enviar = e =>{
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        console.log(nombre,apellido);
    }

  return (
    <div>
        {!nombre && <h1>Esta pagina no tiene niguna persona</h1>}
        {nombre &&  <h3>Bienvenido: {nombre} {apellido}</h3>}
        <h1>ParametrosRutas</h1>
        <strong>Este componente es para ver los parametros por URL</strong>
        <form onSubmit={enviar}>
            <input type="text" name='nombre' placeholder='Ingresar nombre...'/>
            <input type="text" name='apellido' placeholder='Ingresar apellido...'/>
            <input type='submit' value="enviar"/>
        </form>

    </div>
  )
}
