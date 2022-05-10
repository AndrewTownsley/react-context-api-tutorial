import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
// import { Header } from './components/Header/HeaderStyle';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import ConfirmationModal from './components//Checkout/ConfirmationModal';
import { CartState } from './Context/Context';
import { AppContainer } from './AppContainer';


function App() {
  const { state: { cart, inStock },
  productQty, setProductQty, 
      dispatch } = CartState();

  const [total, setTotal] = useState(0.00)
  const [orderConfirmation, setOrderConfirmation] = useState(false)

  const openConfirmationModal = () => {
      setProductQty(0)
      setOrderConfirmation(true)
  }

  
  useEffect(() => {
    setTotal(cart.reduce((a, b) => a + Number(b.price) * Number(b.qty), 0))
}, [cart, setTotal, total])

  return (
    <BrowserRouter>
      <AppContainer>
      <Header/> 
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart total={total} setTotal={setTotal} />} />
            <Route 
              path="/checkout" 
              element={
                <Checkout 
                  total={total} 
                  setTotal={setTotal} 
                  orderConfirmation={orderConfirmation} 
                  setOrderConfirmation={setOrderConfirmation}
                  openConfirmationModal={openConfirmationModal} 
              />} />
            <Route 
              exact path="/confirmationmodal" 
              element={
                <ConfirmationModal 
                  setOrderConfirmation={setOrderConfirmation} 
                />} />
            <Route path="/productdetail" element={<ProductDetail />} />
          </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
