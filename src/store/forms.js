import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  triggerPassword: false,
};
export const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    changeValue: (state) => {
      state.triggerPassword = !state.triggerPassword;
    },
  },
});
export const { changeValue } = formsSlice.actions;
export default formsSlice.reducer;
