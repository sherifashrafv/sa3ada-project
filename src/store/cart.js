import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
export const CartSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    AddToCart: (state, actions) => {
      const qP = state.cart.find((pro) => pro.id === actions.id);
      // qP that Mean Quantity for each Product
      if (!qP) {
        state.cart.push(actions);
        localStorage.setItem("dataBasketCart", JSON.stringify(state.cart));
      } else {
        qP.quantity++;
        localStorage.setItem("dataBasketCart", JSON.stringify(state.cart));
      }
    },
  },
});
export const { AddToCart } = CartSlice.actions;
export default CartSlice.reducer;
