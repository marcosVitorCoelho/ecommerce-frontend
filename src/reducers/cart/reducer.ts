import { ProductProps } from "@/interfaces/getProductInterface.interface";
import { ActionTypes } from "./actionsEnum";

interface cartItemsType {
  cartItems: ProductProps[];
}

export const initialState = {
  cartItems: [],
};

export const cartReducer = (state: cartItemsType, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CAR:
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantityInCart: item.quantityInCart + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...action.payload, quantityInCart: 1 },
          ],
        };
      }

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };

    case ActionTypes.UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantityInCart: action.payload.quantityInCart }
            : item
        ),
      };

    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
