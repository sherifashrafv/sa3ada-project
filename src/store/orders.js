import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../firebase/index";
// import {
//   doc,
//   setDoc,
//   collection,
//   getDocs,
//   query,
//   where,
//   updateDoc,
// } from "firebase/firestore";
import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";
//
export const makeOrder = createAsyncThunk(
  "orders/makeOrder",
  async (order, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      await setDoc(doc(db, "orders"), {});
    } catch (e) {
      return rejectWithValue(e.Message);
    }
  }
);
const initialState = {
  orders: [],
};
export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    // sign-Up
    [makeOrder.pending]: (state, actions) => {
      state.loader = true;
    },
    [makeOrder.fulfilled]: (state, actions) => {
      state.loader = false;
    },
    [makeOrder.rejected]: (state, actions) => {
      state.loader = false;
      state.errorServer = actions.payload;
      toast.error(`${actions.payload} !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  },
});
// export const { SAVE_USER_DATA } = authSlice.actions;
export default orderSlice.reducer;
