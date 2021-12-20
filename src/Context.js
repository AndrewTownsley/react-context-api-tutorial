import { createContext, useContext, useState } from "react";
// import faker from "faker";

export const CartContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);


  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};


export default Context;