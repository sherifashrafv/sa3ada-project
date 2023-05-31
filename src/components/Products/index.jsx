import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../dummyData/index";
import "../Products/index.css";
import Skeleton from "../Skeleton";
// import { query, orderBy, limit } from "firebase/firestore";

export default function Products({ cakes, loading }) {
  const [dummyData, setData] = useState(data);
  const cak = cakes.map((ck) => (
    <Link to={`/product/${ck.id}`}>
      <div className="product-card shadow-md w-[270px] max-w-[100%] h-[276px] bg-white rounded-[18px]">
        <div className="porduct-image">
          <img
            className="h-[212px] rounded-md w-[100%] object-fill"
            src={ck.data.image}
            alt=""
          />
        </div>
        <div className="product-title px-5 py-5">
          <p>{ck.data.name}</p>
        </div>
      </div>
    </Link>
  ));
  console.log(cakes);
  return (
    <>
      <div dir="rtl" className="container m-auto">
        <div className="row">
          {loading ? (
            <Skeleton />
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-5 sm:grid-cols-2 gap-5">
              {cak}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
