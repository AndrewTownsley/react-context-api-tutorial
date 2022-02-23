import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import ConfirmationModal from './components//Checkout/ConfirmationModal';
import { CartState } from './Context/Context';
import { AppContainer } from './AppContainer';


function App() {

  const [total, setTotal] = useState(0.00)
  const [openEdit, setOpenEdit] = useState(false)

  const openConfirmationModal = () => {
    setOpenEdit(true)
  }

  return (
    <BrowserRouter>
      <AppContainer>
      <Header/>
          <Routes>
            <Route exact path="/" element={<Home openEdit={openEdit} />} />
            <Route path="/cart" element={<Cart total={total} setTotal={setTotal} />} />
            <Route path="/checkout" element={<Checkout total={total} setTotal={setTotal} openEdit={openEdit} openConfirmationModal={openConfirmationModal} />} />
            <Route exact path="/confirmationmodal" element={<ConfirmationModal openEdit={openEdit} />} />
          </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
