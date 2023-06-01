import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb";
import { data } from "../../dummyData";
import Slider from "react-slick";
import image1 from "../../assets/basicPackage/1.png";
import image2 from "../../assets/basicPackage/3.png";
import "./index.css";
import { useCallback } from "react";
export default function SingleProduct() {
  const [dummyData, setDummyData] = useState(data);
  const params = useParams();
  const [brandHolder, setBrandingHolder] = useState();
  const [product, setProduct] = useState(dummyData[params.id - 1]);
  const [imageRef, SetimageRef] = useState(product.image);

  //

  const thumnails = document.getElementsByClassName("thumnails");
  const activeImages = document.getElementsByClassName("active");

  const [images, setImg] = useState([
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 2, image: image1 },
    { id: 2, image: image2 },
    { id: 2, image: image1 },
  ]);
  const changeSrc = useCallback(() => {
    console.log("re reloade");
    for (var i = 0; i < thumnails.length; i++) {
      thumnails[i].addEventListener("click", function () {
        if (activeImages.length > 0) {
          activeImages[0].classList.remove("active");
        }
        this.classList.add("active");
        SetimageRef(this.src);
      });
    }
  }, []);

  useEffect(() => {
    changeSrc();
  }, [imageRef]);

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
            {/* dadsadsadasdda */}
            <div className="image-holder">
              <div style={{ backgroundImage: `url("${imageRef}")` }}></div>
              <img
                id="featured"
                className="w-full h-[532px] object-fill"
                src={imageRef}
              />
              <h1 className="text-right pr-3 my-3 text-[#575757]">
                اختر شكل الكيكه
              </h1>
              <div className="img-gallery gap-5 grid grid-cols-5 my-3">
                {images.map((prod) => (
                  <div key={prod.id}>
                    <img
                      role="button"
                      className="thumnails "
                      id="img-slider"
                      src={prod.image}
                      onClickCapture={() => changeSrc()}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* sadasds */}
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
