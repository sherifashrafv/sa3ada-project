import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sidebar: false,
  shoppingCart: false,
  registerBox: false,
};
export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    TOGGLE_SIDE_BAR: (state) => {
      state.sidebar = !state.sidebar;
    },
    CART_TRRIGGER: (state) => {
      state.shoppingCart = !state.shoppingCart;
    },
    RIGSTER_BOX_TRRIGER: (state) => {
      state.registerBox = !state.registerBox;
    },
  },
});
export const { TOGGLE_SIDE_BAR, CART_TRRIGGER, RIGSTER_BOX_TRRIGER } =
  navbarSlice.actions;
export default navbarSlice.reducer;
