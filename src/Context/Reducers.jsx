import { StrictMode } from "react/cjs/react.production.min"

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart, { ...action.payload, qty: 1}]}
        case "REMOVD_FROM_CART":
            return {...state, cart:[...state.cart.fitler((item) => item.id !== action.payload.id)]}
        case "UPDATE_CART_QUANTITY":
            return {...state, 
                cart:state.cart
                .filter(c => c.id === action.payload.id ? (c.qty = action.payload.qty) 
                : c.qty)            
            }
            default:
                return state;
            }
}

export const productReducer = () => {

}