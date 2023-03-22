import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../dummyData/index";
import "../Products/index.css";
export default function Products() {
  const [dummyData, setData] = useState(data);
  return (
    <>
      <div dir="rtl" className="container m-auto">
        <div className="row">
          <div className="text-start mt-10 pr-3">{dummyData.length} منتج </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-5 sm:grid-cols-2 gap-5">
            {dummyData.map((prod) => (
              <Link to={`/product/${prod.id}`}>
                <div className="product-card shadow-md w-[270px] max-w-[100%] h-[276px] bg-white rounded-[18px]">
                  <div className="porduct-image">
                    <img
                      className="h-[212px] w-[100%] object-fill"
                      src={prod.image}
                      alt=""
                    />
                  </div>
                  <div className="product-title px-5 py-5">
                    <p>{prod.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
