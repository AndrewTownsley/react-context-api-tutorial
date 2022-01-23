import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import faker from "faker";

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [productQty, setProductQty] = useState(1);

  const productsArray = [...Array(60)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    inStock: faker.random.arrayElement([0,0,0,0,1,1,1,1,1,3,4,5,6,7,24,37,46,57,79,29,64,12,17,98,56,47]),
    nextDay: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1,2,3,4,5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    productsArray: productsArray,
    cart: [],
    productQty: 0,
  })
  console.log(productsArray);

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byNextDay: false,
    byRating: 0,
    searchQeury: "",
  })

  return (
    <Cart.Provider value={{ state, dispatch, productQty, setProductQty, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;