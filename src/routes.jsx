import { createBrowserRouter } from "react-router-dom";

import Home from '../src/pages/Home'
import Cadastro from "./pages/Cadastro";
import ListaPontosTuristicos from "./pages/ListaPontosTuristicos";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    }, {
        path:'/cadastro',
        element: <Cadastro/>
    }, {
        path:'/pontos-turisticos',
        element: <ListaPontosTuristicos/>
    }
])