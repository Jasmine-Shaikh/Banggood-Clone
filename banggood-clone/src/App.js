
import React from 'react';
import Home from './Pages/Home'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import FlashDeals from './Components/FlashDeals';
import HotDeals from './Components/HotDeals';
import Mens from './Pages/Mens'
import Womens from './Pages/Womens';
import Product from './Components/Product';
import Cart from "./Pages/Cart.jsx"

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/flash-deals" element={<FlashDeals />}></Route>
        <Route exact path="/hot-deals" element={<HotDeals />}></Route>
        <Route exact path="/product" element={<Product />}></Route>
        <Route exact path="/Mens" element={<Mens />}></Route>
        <Route exact path="/Womens" element={<Womens />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
      </Routes>
  );
}

export default App;
