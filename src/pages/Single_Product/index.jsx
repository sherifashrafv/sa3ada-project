import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb";
import imageIcon from "../../assets/Icons/image icon.svg";
import "./index.css";
import { useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { addToCartSchema } from "../../Validations";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { AddToCart } from "../../store/cart";
import { useDispatch } from "react-redux";
export default function SingleProduct() {
  const { id } = useParams();
  const [prod, setProd] = useState();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);
  const [activeShape, setActiveShape] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const dispatch = useDispatch();
  // get-ProductInformation
  const getProductInfo = async (id) => {
    const docRef = doc(db, "products", id);
    await getDoc(docRef)
      .then((snapshot) => {
        setProd(snapshot.data());
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const thumnails = document.getElementsByClassName("thumnails");
  const activeImages = document.getElementsByClassName("active");
  const changeSrc = useCallback(() => {
    console.log("re reloade");
    for (var i = 0; i < thumnails.length; i++) {
      thumnails[i].addEventListener("click", function () {
        if (activeImages.length > 0) {
          activeImages[0].classList.remove("active");
        }
        this.classList.add("active");
      });
    }
  }, []);

  // for labels validation

  const onSubmit = (values, actions) => {
    const product = { ...values, ...prod };
    console.log(product);
    if (!values) {
      console.log("errors still handling !");
    } else {
      actions.resetForm();
      dispatch(AddToCart(product));
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleChange,
    setTouched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      shape: "",
      taste: "",
      image: null,
      typeCk: "",
      inCake: "",
      inCard: "",
    },
    validationSchema: addToCartSchema,
    onSubmit,
  });
  console.log(errors);
  useEffect(() => {
    changeSrc();
  }, []);
  useEffect(() => {
    getProductInfo(id);
  }, [id]);

  return (
    <>
      <BreadCrumb />
      {loading ? (
        <p>loading ...</p>
      ) : (
        <div className="container m-auto my-[5rem]">
          <form onSubmit={handleSubmit}>
            <div className="row mb-5">
              <div className="text-right">
                <h1 className="text-[#242424] mb-2 text-[32px] font-bold">
                  {prod.name}
                </h1>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد
                  <br />
                  هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
                </p>
              </div>
            </div>
            <div className="row my-10">
              <div className="grid grid-cols-2 gap-20">
                {/* dadsadsadasdda */}
                <div className="image-holder">
                  <div
                    style={{ backgroundImage: `url("${prod.image}")` }}
                  ></div>
                  <img
                    id="featured"
                    className="w-full h-[532px] object-fill"
                    src={prod.image}
                  />
                  <h1 className="text-right pr-3 my-3 text-[#575757]">
                    اختر شكل الكيكه
                  </h1>
                  <div className="img-gallery gap-5 grid grid-cols-5 my-3">
                    {prod.gallary.map((prod, idx) => (
                      <div key={idx}>
                        <img
                          role="button"
                          className="thumnails "
                          id="img-slider"
                          src={prod}
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
                    src={prod.image}
                    alt=""
                  />

                  <div dir="rtl">
                    <p className="mt-3 text-[#575757]">اختر شكل الكيكة</p>
                    <motion.div
                      initial={{ opacity: 0, y: "50%" }}
                      animate={{ opacity: 1, x: "0%" }}
                      transition={{ duration: 0.9 }}
                    >
                      {errors.shape && touched ? (
                        <span className="text-red-600 my-3">
                          {errors.shape}
                        </span>
                      ) : (
                        ""
                      )}
                    </motion.div>
                    <div className="grid grid-cols-5 wrap gap-2 mt-5">
                      {prod.chooseAShape.map((item) => (
                        <label
                          className={`label-order-button ${
                            activeShape == item && "active"
                          }`}
                          onClick={() => setActiveShape(item)}
                          key={item.id}
                        >
                          {item}
                          <input
                            type="checkbox"
                            name={item}
                            onChange={(e) => {
                              const value = e.target.value || "";
                              setFieldValue("shape", value);
                            }}
                          />
                        </label>
                      ))}
                    </div>
                    {/* taste */}
                    <p className="mt-3 text-[#575757] ">اختر طعم الكيكه</p>
                    <motion.div
                      initial={{ opacity: 0, y: "50%" }}
                      animate={{ opacity: 1, x: "0%" }}
                      transition={{ duration: 0.9 }}
                    >
                      {errors.taste && touched ? (
                        <span className="text-red-600 my-3">
                          {errors.taste}
                        </span>
                      ) : (
                        ""
                      )}
                    </motion.div>
                    <div className="grid grid-cols-5 wrap gap-2 mt-5">
                      {prod.chooseTaste.map((item, idx) => (
                        <label
                          className={`label-order-button ${
                            active == item && "active"
                          }`}
                          onClick={() => setActive(item)}
                          key={idx}
                        >
                          {item}
                          <input
                            type="checkbox"
                            name={item}
                            onChange={(e) => {
                              const value = e.target.value || "";
                              setFieldValue("taste", value);
                            }}
                            value={item}
                          />
                        </label>
                      ))}
                    </div>
                    {/* end-taste */}

                    {/* Type */}
                    <p className="mt-3 text-[#575757] ">اختر نوع الكيكه</p>
                    <motion.div
                      initial={{ opacity: 0, y: "50%" }}
                      animate={{ opacity: 1, x: "0%" }}
                      transition={{ duration: 0.9 }}
                    >
                      {errors.typeCk && touched ? (
                        <span className="text-red-600 my-3">
                          {errors.typeCk}
                        </span>
                      ) : (
                        ""
                      )}
                    </motion.div>
                    <div className="grid grid-cols-5 wrap gap-2 mt-5">
                      {prod.typeCake.map((item, idx) => (
                        <label
                          className={`label-order-button ${
                            activeType == item && "active"
                          }`}
                          onClick={() => setActiveType(item)}
                          key={idx}
                        >
                          {item}
                          <input
                            type="checkbox"
                            name={item}
                            onChange={(e) => {
                              const value = e.target.value || "";
                              setFieldValue("typeCk", value);
                            }}
                          />
                        </label>
                      ))}
                    </div>
                    {/* end-Type */}
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div dir="rtl" className="row">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label
                    className="text-[14px] mb-5  font-semibold text-[#575757]"
                    htmlFor=""
                  >
                    النص المكتوب على الكيك
                  </label>
                  <motion.div
                    initial={{ opacity: 0, y: "50%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 0.9 }}
                  >
                    {errors.inCake && touched ? (
                      <span className="text-red-600 my-3">{errors.inCake}</span>
                    ) : (
                      ""
                    )}
                  </motion.div>
                  <input
                    onChange={(e) => {
                      const value = e.target.value || "";
                      setFieldValue("inCake", value.toLowerCase());
                    }}
                    type="text"
                    className="inp-ck"
                    value={values.inCake}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-[14px] mb-5  font-semibold text-[#575757]"
                    htmlFor=""
                  >
                    النص المكتوب على الكارت
                  </label>
                  <motion.div
                    initial={{ opacity: 0, y: "50%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 0.9 }}
                  >
                    {errors.inCard && touched ? (
                      <span className="text-red-600 my-3">{errors.inCard}</span>
                    ) : (
                      ""
                    )}
                  </motion.div>
                  <input
                    onChange={(e) => {
                      const value = e.target.value || "";
                      setFieldValue("inCard", value.toLowerCase());
                    }}
                    type="text"
                    value={values.inCard}
                    className="inp-ck"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] mb-5  font-semibold text-[#575757]">
                    رفع صورة للكيك
                  </p>
                  <div className="img_uploader  relative">
                    <label
                      id="file_img"
                      className="text-[14px] mb-5  font-semibold text-[#575757]"
                      htmlFor="ck_photo"
                    >
                      <img src={imageIcon} alt="" />
                    </label>
                    <input
                      onChange={(e) => {
                        setTouched({
                          ...touched,
                          image: true,
                        });
                        setFieldValue("image", e.target.files[0]);
                      }}
                      id="ck_photo"
                      type="file"
                      className="inp-ck_file"
                    />
                  </div>
                </div>
              </div>
              <div className="flex my-8 items-center justify-center">
                <button className="btn-linear-color w-[280px] my-7">
                  أضف الى العربة
                </button>
              </div>
            </div>
            {/*  */}
          </form>
        </div>
      )}
    </>
  );
}
