import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer } from "./Reducers";
import faker from "faker";

const Cart = createContext();
faker.seed(100);

const Context = ({ children,product }) => {
  const [cart, setCart] = useState([]);
  const [productQty, setProductQty] = useState(1);

  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    inStock: faker.random.arrayElement([0,3,4,5,6,7]),
    nextDay: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1,2,3,4,5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    productsArray: productsArray,
    cart: [],
  })

//   const decreaseCartQty = (id) => {
//     let cartCopy = [...cart]
//     let productQty = cartCopy.filter(item => item.id === id);
//     productQty.pop();
//     let newCart = cart.filter(item => item.id !== id);
//     setCart([...newCart, ...productQty])
// }

  const decreaseCartQty = (id) => {
    let cartCopy = [...cart]
    let productQty = cartCopy.filter(item => item.id === id);
    productQty.pop();
    let newCart = cart.filter(item => item.id !== id);
    setCart([...newCart, ...productQty])
}


  return (
    <Cart.Provider value={{ state, dispatch, cart, setCart, productQty, setProductQty, decreaseCartQty }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;