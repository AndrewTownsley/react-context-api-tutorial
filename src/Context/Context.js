import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import faker from "faker";

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [productQty, setProductQty] = useState(1);
  const [groundShipping, setGroundShipping] = useState(false);

  const states = [
    'State',
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]

  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    inStock: faker.random.arrayElement([0,0,0,0,1,1,1,1,1,3,3,3,3,3,4,4,4,4,5,6,7,24,37,46,57,79,29,64,12,17,98,56,47]),
    // nextDay: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1,2,3,4,5]),
    productQty: 0,
  }));

  const [shipFormData, setShipFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    zipCode: "",
}) 

  const [state, dispatch] = useReducer(cartReducer, {
    productsArray: productsArray,
    cart: [],
    productQty: 1,
    states: states,
    paymentFormActive: false,
    shipFormData: shipFormData,
  })

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byNextDay: false,
    byRating: 0,
    searchQeury: "",
  })

  return (
    <Cart.Provider value={{ state, dispatch, productQty, setProductQty, productState, productDispatch, shipFormData, setShipFormData, groundShipping, setGroundShipping, isLoading, setIsLoading}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;