import React, { useEffect } from "react";
import "./index.css";
import Close from "../../assets/cart/close.svg";
import { CART_TRRIGGER } from "../../store/navbarSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../assets/cart/Rectangle 9615.svg";
import deleteIcon from "../../assets/cart/delete icon.svg";
import { Link } from "react-router-dom";
import { DeleteProduct } from "../../store/cart";
export default function CartModal() {
  const navBar = useSelector((state) => state.NavBar);
  const { cart } = useSelector((state) => state.Cart);
  const total = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  console.log(cart);
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
          {cart.length === 0 ? (
            <div className="p-[15px 22px] h-full mt-[3rem] flex items-center justify-center">
              السلة فارغة !
            </div>
          ) : (
            <div className="content flex flex-col h-[100%] p-[15px 22px] mt-[3rem]">
              <div>
                <p className="length text-right pr-5 mt-[4rem] text-[#6821F4]">
                  السلة : {cart.length} منتجات
                </p>
              </div>
              <ul dir="rtl" className="incart-items mt-8 px-5">
                {cart.map((item) => (
                  <li className="flex pb-3 mb-4 relative justify-start gap-5 flex-row items-start border-b-slate-300">
                    <span
                      onClick={() => dispatch(DeleteProduct(item.id))}
                      className="delete-icon"
                    >
                      <img src={deleteIcon} alt="" />
                    </span>
                    <div>
                      <img
                        className="object-fill h-[80px] w-[100px] object-center"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="product-description flex-col gap-5">
                      <h2 className="product-title font-bold">
                        كوكي كيك مزينة بالورود
                      </h2>
                      <span className="mt-4 text-[#949494]">
                        السعر:&nbsp;
                        <span className="text-[#242424] font-bold">
                          {item.price} ر س
                        </span>
                      </span>
                    </div>
                  </li>
                ))}

                <li className="flex flex-row mb-[1rem] items-center justify-between">
                  <span className="text-[#949494]">الاجمالي</span>
                  <span className="total-price text-[#6821F4]">{total} رس</span>
                </li>
              </ul>
              <div className="payments-methods pt-4 flex px-10 pb-5 gap-3 w-[100%]  flex-row justify-center items-center">
                <Link
                  onClick={() => dispatch(CART_TRRIGGER())}
                  to="/cart"
                  className="brdr-linear-btn relative"
                >
                  <span className="show-cart">عرض السلة</span>
                </Link>
                <Link className="btn-linear text-white font-thin ">
                  اتمام عملية الدفع
                </Link>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
