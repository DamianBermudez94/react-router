import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate} from "react-router-dom";
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error'
import { ParametrosRutas } from '../components/ParametrosRutas';
import { PanelControl } from '../components/PanelControl';
import { Acerda } from '../components/panel/Acerda';
import { InicioPanel } from '../components/panel/Inicio';
import { Gestion } from '../components/panel/Gestion';
import { Crear } from '../components/panel/Crear';
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

                    <li>
                      <NavLink to="/panel"  className={({isActive}) => isActive ? "activado" : "" }>
                      Panel control
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
                <Route path='/persona/:nombre' element={<ParametrosRutas/>}/>
                <Route path='/persona' element={<ParametrosRutas/>}/>
                <Route path='/redirigir' element={<Navigate to="/persona/damian/bermudez"/>}/>
                <Route path='*' element={<Error/>}/>
                <Route path='/panel/*' element={<PanelControl/>}>
                    <Route index element={<InicioPanel/>}/>
                    <Route path='inicio' element={<InicioPanel/>}/>
                    <Route path='crear' element={<Crear/>}/>
                    <Route path='gestio-usuarios' element={<Gestion/>}/>
                    <Route path='acerda-de' element={<Acerda/>}/>
                </Route>
            </Routes>

        </BrowserRouter>

    </div>
  )
}
