import React from "react";
import BreadCrumb from "../../components/breadCrumb";
import Cake from "../../assets/basicPackage/1.png";
import deleteIcon from "../../assets/cart/delete icon.svg";
import Visa from "../../assets/Icons/visa.svg";
import "./index.css";
export default function PaymentPorccess() {
  return (
    <>
      <BreadCrumb />
      <section className="my-[7rem]">
        <div className="container m-auto">
          <div className="row">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                {/* products */}
                <div className="p-3 px-7 sidebox-with-products bg-[#FFFFFF;]">
                  <div className="side-product mb-5 flex gap-5 flex-row justify-end">
                    <div className="description-sidebox text-right">
                      <h3 dir="rtl">كوكي كيك مزينة بالورود</h3>
                      <p className="text-[#575757]  font-bold">
                        السعر:
                        <span className="text-[#242424] font-bold">100 رس</span>
                      </p>
                      <div className="mt-2" role="button">
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
                    <div>
                      <img
                        className="h-[80px] w-[80px] rounded-[16px]"
                        src={Cake}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="side-product mb-5 flex gap-5 flex-row justify-end">
                    <div className="description-sidebox text-right">
                      <h3 dir="rtl">كوكي كيك مزينة بالورود</h3>
                      <p className="text-[#575757]  font-bold">
                        السعر:
                        <span className="text-[#242424] font-bold">100 رس</span>
                      </p>
                      <div className="mt-2" role="button">
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
                    <div>
                      <img
                        className="h-[80px] w-[80px] rounded-[16px]"
                        src={Cake}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* end-products */}

                {/* discount-coupon */}
                <div className="discount-coupon my-5 py-5 px-5">
                  <h2 className="text-right font-bold">قسيمة الخصم</h2>
                  <input
                    className="grey-input"
                    type="text"
                    placeholder="ادخل رمز القسيمة"
                  />
                  <div className="flex justify-center">
                    <button className="btn mt-4 btn-confirm-coupon ">
                      تاكيد
                    </button>
                  </div>
                </div>
                {/* end-coupon */}
                {/* total-products-amount */}
                <div className="total-cart-box rounded-[18px] py-5 px-5">
                  <h4
                    className="font-bold text-right 
                "
                  >
                    إجمالي السلة
                  </h4>
                  <ul className="total-shipping-products my-5">
                    <li className="flex justify-between mb-7">
                      <span dir="rtl" className="font-bold text-[#000000]">
                        80.00 رس
                      </span>
                      <span className="text-[#575757]">المجموع</span>
                    </li>
                    <li className="flex justify-between ">
                      <span dir="rtl" className="font-bold text-[#000000]">
                        80.00 رس
                      </span>
                      <span className="total-tax text-[#575757]">
                        ضريبة القيمة المضافة
                      </span>
                    </li>
                    <hr className="mt-6 text-[#F4ECEC]" />
                    <li className="flex justify-between mt-2 ">
                      <span dir="rtl" className="font-bold text-[#6821F4]">
                        80.00 رس
                      </span>
                      <span className="total-tax text-[#575757]">الإجمالي</span>
                    </li>
                  </ul>
                </div>
                {/* total-products-amount*/}
              </div>
              <div className="col-span-2">
                <form>
                  <div className="info-box p-4">
                    <h1 className="text-right font-bold text-[24px] text-[#242424] mb-3">
                      بيانات المرسل إليه
                    </h1>
                    <div className="row my-7">
                      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                        <div className="input-group">
                          <label className="text-right" htmlFor="user-name">
                            اسم المرسل إليه
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            className="grey-input"
                          />
                        </div>
                        <div className="input-group">
                          <label className="text-right" htmlFor="user-name">
                            اسم المرسل إليه
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            className="grey-input"
                          />
                        </div>
                      </div>
                    </div>
                    <h1 className="text-right font-bold text-[16px] text-[#242424] mb-3">
                      عنوان التوصيل
                    </h1>
                    <div className="row my-7">
                      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 mb-5">
                        <div className="input-group">
                          <label className="text-right" htmlFor="user-name">
                            المدينة
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            className="grey-input"
                          />
                        </div>
                        <div className="input-group">
                          <label className="text-right" htmlFor="user-name">
                            المنطقة
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            className="grey-input"
                          />
                        </div>
                      </div>
                      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 mb-5">
                        <div className="input-group">
                          <label className="text-right" htmlFor="user-name">
                            اسم الشارع
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            className="grey-input"
                          />
                        </div>
                        <div className="input-group">
                          <label className="text-right" htmlFor="user-name">
                            رقم المبنى
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            className="grey-input"
                          />
                        </div>
                      </div>
                      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 mb-5">
                        <div className="input-group">
                          <label className="text-right" htmlFor="user-name">
                            رقم الشقة
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            className="grey-input"
                          />
                        </div>
                        <div className="input-group">
                          <label className="text-right" htmlFor="user-name">
                            علامة مميزة قريبة منك
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            className="grey-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-methods mt-5 p-5">
                    <h1 className="text-right font-bold text-[#242424]">
                      طريقة الدفع
                    </h1>
                    <div className="flex flex-row mt-5 justify-end mb-3">
                      <label htmlFor="" className="font-bold">
                        الدفع عند الاستلام
                      </label>
                      <input
                        className="ml-5"
                        type="radio"
                        name="payment"
                        id=""
                      />
                    </div>
                    <div className="flex gap-1 flex-row justify-end">
                      <label htmlFor="" className="font-bold">
                        الدفع باستخدام كارت البنك
                      </label>
                      <img src={Visa} alt="" />
                      <input
                        className="ml-5"
                        type="radio"
                        name="payment"
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    <button className="btn-confirm">إتمام عملية الدفع</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
