import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  cart: JSON.parse(localStorage.getItem("dataBasketCart")) || [],
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, actions) => {
      var date = new Date("2016-12-04");

      var months = [
        "يناير",
        "فبراير",
        "مارس",
        "إبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ];

      var days = [
        "اﻷحد",
        "اﻷثنين",
        "الثلاثاء",
        "اﻷربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ];
      var delDateString =
        days[date.getDay()] +
        ", " +
        date.getDate() +
        " " +
        months[date.getMonth()] +
        ", " +
        date.getFullYear();
      const pr = {
        id: uuidv4(),
        ...actions.payload,
        quantity: 0,
        createdAt: delDateString,
      };
      let Product = pr;
      const qP = state.cart.find((pro) => pro.id === Product.id);
      // qP that Mean Quantity for each Product
      if (!qP) {
        state.cart.push(Product);
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
