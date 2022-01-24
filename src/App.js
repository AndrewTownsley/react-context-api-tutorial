import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import { CartState } from './Context/Context';


function App() {
  const [total, setTotal] = useState(0.00)

  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart total={total} setTotal={setTotal} />} />
            <Route path="/checkout" element={<Checkout total={total} setTotal={setTotal} />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
