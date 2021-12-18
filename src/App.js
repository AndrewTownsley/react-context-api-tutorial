import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
          <Routes>
            <Route exact path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
