
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import {BrowserRouter} from "react-router-dom";
import{Routes}from "react-router-dom";
import{Route}from"react-router-dom";
import FlashDeals from './Components/FlashDeals';
import HotDeals from './Components/HotDeals';
import Product from './Components/Product';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/flash-deals" element={<FlashDeals/>}></Route>
    <Route exact path="/hot-deals" element={<HotDeals/>}></Route>
    <Route exact path="/product" element={<Product/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
