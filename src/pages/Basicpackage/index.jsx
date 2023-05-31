import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/breadCrumb";
import cake from "../../assets/birthday/cake.svg";
import search from "../../assets/birthday/search.svg";
import "../Basicpackage/index.css";
import Carousel from "../../components/Carousel";
import Products from "../../components/Products";
import { db } from "../../firebase";
import { collection, getDocs, limit, query } from "firebase/firestore";

export default function BasicPackage() {
  const [brand, setbrand] = useState([
    { id: 1, label: "Decorated", isChecked: false },
    { id: 2, label: "Basic", isChecked: true },
  ]);
  const [cake, setCake] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brandHolder, setBrandingHolder] = useState();

  const getData = async () => {
    const cakesRef = collection(db, "products");
    getDocs(cakesRef)
      .then((response) => {
        const cak = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setCake(cak);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (e) => {
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

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <BreadCrumb />
      <div className="box p-[33px] pb-[5rem] m-auto  mt-[7rem]">
        <div className="container m-auto">
          <div className="row">
            <div className="grid grid-cols-2">
              <div className="flex flex-row justify-center items-center">
                <img src={cake} alt="" />
              </div>
              <div>
                <div className="flex flex-row justify-end">
                  <form dir="rtl" className="form-search-product relative">
                    <input type="text" placeholder="ابحث عن المنتج" />
                    <button type="submit" className="searh-icon">
                      <img src={search} alt="" />
                    </button>
                  </form>
                </div>
                <div className="brand-select text-right mr-2 mt-[1rem]">
                  <p>اختر العلامة التجارية</p>
                  <div className="flex justify-end gap-5 flex-row mt-5">
                    {brand.map((item) => (
                      <label
                        className={
                          item.isChecked
                            ? "label-button label_active"
                            : "label-button "
                        }
                        key={item.id}
                      >
                        {item.label}
                        <input
                          type="checkbox"
                          name={item.label}
                          value={item.id}
                          onChange={(e) => handleChange(e)}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Carousel />
          </div>
        </div>
      </div>
      <Products loading={loading} cakes={cake} />
    </>
  );
}
