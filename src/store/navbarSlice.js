import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sidebar: false,
  shoppingCart: false,
  registerBox: false,
  login: false,
  register: false,
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
    LOGIN_MODAL: (state) => {
      state.login = !state.login;
    },
    REGISTER_MODAL: (state) => {
      state.register = !state.register;
    },
  },
});
export const {
  TOGGLE_SIDE_BAR,
  CART_TRRIGGER,
  RIGSTER_BOX_TRRIGER,
  LOGIN_MODAL,
  REGISTER_MODAL,
} = navbarSlice.actions;
export default navbarSlice.reducer;
