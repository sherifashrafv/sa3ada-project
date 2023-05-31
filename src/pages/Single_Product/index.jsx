import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb";
import { data } from "../../dummyData";
import Slider from "react-slick";
// import "index."
export default function SingleProduct() {
  const [dummyData, setDummyData] = useState(data);
  const params = useParams();
  const [product, setProduct] = useState(dummyData[params.id - 1]);
  return (
    <>
      <BreadCrumb />
      <div className="container m-auto my-[5rem]">
        <div className="row mb-5">
          <div className="text-right">
            <h1 className="text-[#242424] mb-2 text-[32px] font-bold">
              {product.name}
            </h1>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              <br />
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
            </p>
          </div>
        </div>
        <div className="row my-10">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <img
                className="w-full h-[532px] object-fill"
                src={product.image}
              />
            </div>
            <div>
              <img
                className="w-full h-[532px] object-fill"
                src={product.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
