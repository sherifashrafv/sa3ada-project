import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  triggerPassword: false,
};
export const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    CHANGE_VALUE: (state) => {
      state.triggerPassword = !state.triggerPassword;
    },

  },
});
export const { CHANGE_VALUE } = formsSlice.actions;
export default formsSlice.reducer;
