const { createStore } = require("redux");
const { default: cartReducers } = require("../reducers/cartReduces");

export const store = createStore(cartReducers);
