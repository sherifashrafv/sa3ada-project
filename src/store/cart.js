import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  cart: JSON.parse(localStorage.getItem("dataBasketCart")) || [],
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, actions) => {
      var date = new Date(Date.now());

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
      console.log(actions.payload);
      const pr = {
        id: uuidv4(),
        ...actions.payload,
        quantity: 1,
        createdAt: delDateString,
      };
      let Product = pr;
      const qP = state.cart.find((pro) => pro.id === Product.id);
      // qP that Mean Quantity for each Product
      if (!qP) {
        state.cart.push(Product);
        localStorage.setItem("dataBasketCart", JSON.stringify(state.cart));
        toast.success("🦄 تم اضافة المنتج الي السلة !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        qP.quantity++;
        localStorage.setItem("dataBasketCart", JSON.stringify(state.cart));
      }
    },
    DeleteProduct: (state, actions) => {
      const exist = JSON.parse(localStorage.getItem("dataBasketCart"));
      exist.splice(actions.payload.id, 1);
      localStorage.setItem("dataBasketCart", JSON.stringify(exist));
      const deleteNormaly = state.cart;
      deleteNormaly.splice(actions.payload.id, 1);
    },
  },
});
export const { AddToCart, DeleteProduct } = CartSlice.actions;
export default CartSlice.reducer;
