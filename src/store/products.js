import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "@/Firebase/firebase";

const initialState = {};
const getProducts = createAsyncThunk("products", (_, ThunkApi) => {});
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
export default productsSlice.reducer;
