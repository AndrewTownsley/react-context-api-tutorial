import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import ConfirmationModal from './components//Checkout/ConfirmationModal';
import { CartState } from './Context/Context';


function App() {

  const [total, setTotal] = useState(0.00)
  const [openEdit, setOpenEdit] = useState(false)

  const openConfirmationModal = () => {
    setOpenEdit(true)
  }

  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
          <Routes>
            <Route exact path="/" element={<Home openEdit={openEdit} />} />
            <Route path="/cart" element={<Cart total={total} setTotal={setTotal} />} />
            <Route path="/checkout" element={<Checkout total={total} setTotal={setTotal} openEdit={openEdit} openConfirmationModal={openConfirmationModal} />} />
            <Route exact path="/confirmationmodal" element={<ConfirmationModal openEdit={openEdit} />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
