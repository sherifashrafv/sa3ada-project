import React, { useEffect } from "react";
import "./index.css";
import Close from "../../assets/cart/close.svg";
import { CART_TRRIGGER } from "../../store/navbarSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../assets/cart/Rectangle 9615.svg";
import deleteIcon from "../../assets/cart/delete icon.svg";
import { Link } from "react-router-dom";
export default function CartModal() {
  const navBar = useSelector((state) => state.NavBar);
  const dispatch = useDispatch();
  return (
    <>
      <aside
        className={
          navBar.shoppingCart
            ? "cart-sidebar-contanier fade-in"
            : "cart-sidebar-contanier"
        }
      >
        <div className={navBar.shoppingCart ? "cart-side-active" : "cart-side"}>
          <span
            onClick={() => dispatch(CART_TRRIGGER())}
            className="close-cart"
          >
            <img src={Close} alt="" />
          </span>
          <div className="content flex flex-col h-[100%] p-[15px 22px] mt-[3rem]">
            <div>
              <p className="length text-right pr-5 mt-[4rem] text-[#6821F4]">
                السلة : 2 منتجات
              </p>
            </div>
            <ul dir="rtl" className="incart-items mt-8 px-5">
              <li className="flex pb-3 mb-4 relative justify-start gap-5 flex-row items-start border-b-slate-300">
                <span className="delete-icon">
                  <img src={deleteIcon} alt="" />
                </span>
                <div>
                  <img src={Product} alt="" />
                </div>
                <div className="product-description flex-col gap-5">
                  <h2 className="product-title font-bold">
                    كوكي كيك مزينة بالورود
                  </h2>
                  <span className="mt-4 text-[#949494]">
                    السعر:&nbsp;
                    <span className="text-[#242424] font-bold">100 ر س</span>
                  </span>
                </div>
              </li>
              <li className="flex flex-row mb-[1rem] items-center justify-between">
                <span className="text-[#949494]">الاجمالي</span>
                <span className="total-price text-[#6821F4]">80.00 رس</span>
              </li>
            </ul>
            <div className="payments-methods pt-4 flex px-10 pb-5 gap-3 w-[100%]  flex-row justify-center items-center">
              <Link className="brdr-linear-btn relative">
                <span className="show-cart">عرض السلة</span>
              </Link>
              <Link className="btn-linear text-white font-thin ">
                اتمام عملية الدفع
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
