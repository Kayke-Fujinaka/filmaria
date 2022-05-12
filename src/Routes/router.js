import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home'
import Filme from '../Pages/Filme'
import Favoritos from '../Pages/Favoritos'
import Error from '../Pages/Error'

import Header from '../Components/Header';

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/Filme/:id" element={ <Filme/> } />
            <Route exact path="/favoritos" element={ <Favoritos/> } />
            <Route exact path="*" element={ <Error/> } />
        </Routes>
    </BrowserRouter>
    )
};