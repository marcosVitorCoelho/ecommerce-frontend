"use client"

import { ReactNode, createContext, useReducer } from "react";
import { cartReducer, initialState } from "@/reducers/cart/reducer";
import { ProductProps } from "@/interfaces/getProductInterface.interface";
import { ActionTypes } from "@/reducers/cart/actionsEnum";

interface CartContextType {
  handleAddToCart: (item: ProductProps) => void;
  handleRemoveFromCart: (itemId: string) => void;
  handleUpdateQuantity: (itemId: string, newQuantity: number) => void;
  handleClearCart: () => void;
  calculateTotalPrice: () => number;
  cartItems: ProductProps[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextType);

const CartProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const handleAddToCart = (item: ProductProps) => {
    dispatch({ type: ActionTypes.ADD_TO_CAR, payload: item });
  };

  const handleRemoveFromCart = (itemId: string) => {
    dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: itemId });
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: itemId });
    } else {
      dispatch({
        type: ActionTypes.UPDATE_QUANTITY,
        payload: { _id: itemId, quantityInCart: newQuantity },
      });
    }
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const calculateTotalPrice = () => {
    return state.cartItems.reduce(
      (total, item) => total + item.price * item.quantityInCart,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateQuantity,
        handleClearCart,
        calculateTotalPrice,
        cartItems: state.cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
