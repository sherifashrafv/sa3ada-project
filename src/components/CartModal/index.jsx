import React, { useEffect } from "react";
import "../CartModal/index.css";
import Close from "../../assets/cart/close.svg";
export default function CartModal({ active, cartTrigger }) {
  return (
    <>
      {active ? (
        <aside onClick={() => cartTrigger()} className="cart-sidebar-contanier">
          <div className={active ? "cart-side-active" : "cart-side"}>
            <span onClick={() => cartTrigger()} className="close-cart">
              <img src={Close} alt="" />
            </span>
            <div className="content p-[15px 22px] mt-[3rem]">
              <p className="length text-right pr-5 mt-[4rem] text-[#6821F4]">
                السلة : 2 منتجات
              </p>
              <div className="flex flex-col items-center">
                <div className="incart-items flex-row flex items-start">
                  <div className="prod-image">
                      <img src="../../" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      ) : (
        ""
      )}
    </>
  );
}
