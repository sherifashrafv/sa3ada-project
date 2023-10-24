import React, { useState } from "react";
import BreadCrumb from "../../components/breadCrumb";
import "./index.css";
import Cake from "../../assets/basicPackage/1.png";
import deleteIcon from "../../assets/cart/delete icon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const { cart } = useSelector((state) => state.Cart);
  const total = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const submit = () => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  };
  return (
    <>
      <BreadCrumb />
      <div className="text-right">
        <div className="container m-auto mt-[8rem]">
          {cart.length === 0 ? (
            <div className="p-[15px 22px] h-full mt-[3rem] flex items-center justify-center">
              السلة فارغة !
            </div>
          ) : (
            <div className="row">
              <h1 dir="rtl" className="text-right mb-5 text-[#6821F4]">
                السلة : {cart.length} منتجات
              </h1>
              <div className="grid lg-grid-cols-3 gap-5 md:grid-cols-3">
                <div>
                  <div>
                    <div className="total-cart-box rounded-[18px] py-5 px-5">
                      <h4
                        className="font-bold 
                "
                      >
                        إجمالي السلة
                      </h4>
                      <ul className="total-shipping-products my-5">
                        <li className="flex justify-between mb-7">
                          <span dir="rtl" className="font-bold text-[#000000]">
                            {total} ر س
                          </span>
                          <span className="text-[#575757]">المجموع</span>
                        </li>
                        <hr className="mt-6 text-[#F4ECEC]" />
                        <li className="flex justify-between mt-2 ">
                          <span dir="rtl" className="font-bold text-[#6821F4]">
                            {total} ر س
                          </span>
                          <span className="total-tax text-[#575757]">
                            الإجمالي
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <ul className="in-cart flex flex-col">
                    {cart.map((item) => (
                      <li className="bg-[rgb(255,255,255)] h-[136px] m-shadow rounded-[18px] p-5 flex justify-between">
                        <div className="flex items-center gap-[2rem]">
                          <div role="button">
                            <span
                              className="inline-block mr-2 text-[#F14537]"
                              dir="rtl"
                            >
                              حذف
                            </span>
                            <img
                              className="inline-block"
                              src={deleteIcon}
                              alt="delete"
                            />
                          </div>
                        </div>
                        <div className="flex items-center mt-5">
                          <div className="item-discription">
                            <h1 className="text-[14px] ">{item.name}</h1>
                            <p
                              dir="rtl"
                              className="text-[#575757] font-[12px] mt-[0.5rem]"
                            >
                              السعر :
                              <span className="text-[#242424] pr-[0.5rem] font-bold">
                                {item.price} رس
                              </span>
                            </p>
                          </div>
                          <div className="item-product-cart ml-[1rem]">
                            <img
                              src={item.image}
                              className="w-[80px] h-[80px] rounded-[16px]"
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* CHECK-OUT-SUBMIT  */}
                  <div className="flex justify-center my-10">
                    <Link
                      to="/payment-process"
                      className="btn-payment-process text-center"
                    >
                      إتمام عملية الدفع
                    </Link>
                  </div>
                  {/*------ END ------- */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
