import React from 'react'
import { Routes, Route, NavLink, BrowserRouter} from "react-router-dom";
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error'
export const RouterPrincipal = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/Inicio"></NavLink></li>
          <li><NavLink to="/contacto"></NavLink></li>
          <li><NavLink to="/articulos"></NavLink></li>
        </ul>
      </nav>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='contacto' element={<Contacto/>}/>
                <Route path='artivulos' element={<Articulos />}/>
                <Route path='*' element={<Error/>}/>
            </Routes>

        </BrowserRouter>

    </div>
  )
}
