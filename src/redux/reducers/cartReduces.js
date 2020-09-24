import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [
    { name: "Asus", category: "laptop", id: 1 },
    { name: "HP", category: "laptop", id: 2 },
    { name: "Lenevo", category: "laptop", id: 3 },
    { name: "MI", category: "mobile", id: 4 },
    { name: "Nokia", category: "mobile", id: 5 },
    { name: "Apple", category: "mobile", id: 6 },
    { name: "Audi", category: "car", id: 7 },
    { name: "Tesla", category: "car", id: 8 },
    { name: "BMW", category: "car", id: 9 },
  ],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          { Name: action.name, id: action.id, cartId: state.cart.length },
        ],
      };

    case REMOVE_FROM_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((pd) => pd.cartId !== id);
      return {
        ...state,
        cart: remainingCart,
      };

    default:
      return state;
  }
};

export default cartReducers;
