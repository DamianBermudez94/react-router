import React from 'react'
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error'
export const RouterPrincipal = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/'></Route>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='contacto' element={<Contacto/>}/>
                <Route path='artivulos' element={<Articulos />}/>
                <Route path='*' element={<Error/>}/>
            </Routes>

        </BrowserRouter>

    </div>
  )
}
