import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
const initialState = {
  user: [],
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SAVE_USER_DATA: (state) => {
      let encodedToken = localStorage.getItem("token");
      let decodeToken = jwtDecode(encodedToken);
      state.user = decodeToken;
    },
  },
});
export const { SAVE_USER_DATA } = authSlice.actions;
export default authSlice.reducer;
