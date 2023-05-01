import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate} from "react-router-dom";
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error'
import { ParametrosRutas } from '../components/ParametrosRutas';
export const RouterPrincipal = () => {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <ul>
                  <li>
                      <NavLink to="/inicio" className={({isActive}) => isActive ?   "activado" : "" }>
                      Inicio
                      </NavLink></li>
                  <li>
                      <NavLink to="/contacto"  className={({isActive}) =>       isActive ? "activado" : "" }>
                      Contacto
                      </NavLink>
                    </li>
                  <li>
                      <NavLink to="/articulos"  className={({isActive}) => isActive ? "activado" : "" }>
                      Articulos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/persona"  className={({isActive}) => isActive ? "activado" : "" }>
                      url
                      </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/articulos' element={<Articulos />}/>
                <Route path='/persona/:nombre/:apellido' element={<ParametrosRutas/>}/>
                <Route path='/redirigir' element={<Navigate to="/parametros"/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>

        </BrowserRouter>

    </div>
  )
}
