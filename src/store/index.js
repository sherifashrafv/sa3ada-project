import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./navbarSlice";
import FormsSlice from "./forms";
import Auth from "./auth";
export const store = configureStore({
  reducer: {
    NavBar: NavbarSlice,
    Forms: FormsSlice,
    Auth: Auth,
  },
});