import React from 'react'
import { Routes, Route, NavLink, BrowserRouter} from "react-router-dom";
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error'
export const RouterPrincipal = () => {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <ul>
                  <li><NavLink to="/inicio" className={(datosNavegacion)=>{
                    console.log(datosNavegacion)
                  }}>Inicio</NavLink></li>
                  <li><NavLink to="/contacto">Contacto</NavLink></li>
                  <li><NavLink to="/articulos">Articulos</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='contacto' element={<Contacto/>}/>
                <Route path='articulos' element={<Articulos />}/>
                <Route path='*' element={<Error/>}/>
            </Routes>

        </BrowserRouter>

    </div>
  )
}
