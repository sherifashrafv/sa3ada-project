import React, { useState } from "react";
import "./index.css";
import image from "../../assets/basicPackage/2.png";
export default function Orders() {
  const [brandHolder, setBrandingHolder] = useState();
  const [brand, setbrand] = useState([
    { id: 1, label: "كل الطلبات", isChecked: true },
    { id: 2, label: "تحت المراجعة", isChecked: false },
    { id: 3, label: "الطلبات المستلمة", isChecked: false },
    { id: 4, label: "الطلبات قيد التنفيذ", isChecked: false },
    { id: 5, label: "تحت المراجعة", isChecked: false },
  ]);

  const handleChange = (e, value) => {
    console.log(value);
    setBrandingHolder(e.target.checked);
    setbrand(
      brand.map((o) =>
        o.id == e.target.value
          ? {
              ...o,
              isChecked: !o.isChecked,
            }
          : { ...o, isChecked: false }
      )
    );
  };
  return (
    <div className="orders-box">
      <h1 className="font-bold mb-5 text-[24px]">الطلبات</h1>
      <div className="grid grid-cols-5 gap-2 mt-5">
        {brand.map((item) => (
          <label
            className={
              item.isChecked
                ? "label-orders label_active"
                : "label-order-button"
            }
            key={item.id}
          >
            {item.label}
            <input
              type="checkbox"
              name={item.label}
              value={item.id}
              onChange={(e) => handleChange(e, item.label)}
            />
          </label>
        ))}
      </div>
      <div className="row">
        <ul dir="rtl" className="order-listed mt-5">
          <li className="flex felx-row justify-between items-center px-5 mb-3">
            <div className="flex flex-row items-center">
              <div className="ml-auto">
                <img className="prod-image-order" src={image} alt="" />
              </div>
              <div className="flex flex-col mr-3">
                <span className="flex flex-row gap-1 items-center text-[14px] text-[#949494] mb-3">
                  رقم الطلب :
                  <span className="text-black font-bold">145654</span>
                </span>
                <span className="flex flex-row gap-1 items-center text-[14px] text-[#949494]">
                  تاريخ الطلب :
                  <span className="text-black font-bold">
                    السبت - 10/10/2022
                  </span>
                </span>
              </div>
            </div>
            <span className="order-status">تحت المراجعة</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
