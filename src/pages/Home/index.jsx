import React from "react";
import "../Home/index.css";
import MaskGroup from "../../assets/Home/Mask group.png";
import Crackers1 from "../../assets/Home/Group 16219.png";
import Crackers2 from "../../assets/Home/Group 16217.png";
import IconPrize from "../../assets/Home/Group 26882.svg";
import ReapetIcon from "../../assets/Home/Group 26864.svg";
import Correct from "../../assets/Home/correct.svg";
import Prize from "../../assets/Home/Vector (Stroke).svg";
import Circle from "../../assets/Home/Group 26861.svg";
import SurpirseStars from "../../assets/Home/Group 26875.svg";
import Tape1 from "../../assets/Home/Tape 1.png";
import BagMockups1 from "../../assets/Home/Bags Mockups 1.png";
import HeartSticker from "../../assets/Home/Group 26891.svg";
import CakeSticker from "../../assets/Home/Group 26886.svg";
import SurpriseSticker from "../../assets/Home/Group 26887.svg";
import SaadaEnvlope from "../../assets/Home/Saada Envlope 1.svg";
import SaadaDraw from "../../assets/Home/Saada Drawstring bag 1.png";
import Box2 from "../../assets/Home/Box 02 3.svg";
import Rectangle from "../../assets/Home/Rectangle 9600.svg";
import Arrow from "../../assets/Home/Arrow_05.svg";
import ArrowLinear from "../../assets/Home/Group 115.svg";
import RectangleImage from "../../assets/Home/Rectangle 9602.svg";
import Star from "../../assets/Home/Group 115.svg";
import StarRotate from "../../assets/Home/Group 115.png";
import CackeHearts from "../../assets/Home/CackeHearts.svg";
import FristCake from "../../assets/Home/Rectangle 18.png";
import SecondCake from "../../assets/Home/Rectangle 299.png";
import ThirdCake from "../../assets/Home/Rectangle 295.png";
import FourthCake from "../../assets/Home/Rectangle 293.png";
import FifithCake from "../../assets/Home/Rectangle 291.png";
import Insta from "../../assets/Home/insta.svg";
import AnimationPage from "../../components/AnimationPage/index";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <AnimationPage>
        {/* section-1 */}
        <section className="home-section pt-5">
          <div className="container m-auto relative">
            <div className="row">
              <div className="relative">
                <div className="mask-box">
                  <img src={MaskGroup} alt="" />
                </div>
                <div className="christmas-crackers">
                  <img src={Crackers1} alt="" />
                </div>
                <div className="christmas-crackers_2">
                  <img src={Crackers2} alt="" />
                </div>
                <div className="home-box-description flex flex-col items-end">
                  <h1>
                    هداياك المفضلة لجميع <br></br>المناسبات
                  </h1>
                  <button className="btn-prize">اختر هديتك الآن</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*END section-1 */}

        {/* Start section-2 */}
        <section className=" mt-[23rem] m-3">
          <div className="container m-auto relative">
            <span className="icon-prize_1">
              <img src={IconPrize} alt="" />
            </span>
            <span className="icon-prize_2">
              <img src={SurpirseStars} alt="" />
            </span>
            <div className="row">
              <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-5">
                <div className=" w-[100%] h-[200px] md:order-[4] sm:order-[4] rounded-[18px] flex justify-center flex-col items-center gap-6 bg-white shadow-[0_7px_58px_rgb(117,117,117,0.1)]">
                  <span>
                    <img src={ReapetIcon} alt="" />
                  </span>
                  <span className="font-extrabold">شحن سريع</span>
                </div>
                <div className="w-[100%] h-[200px] md:order-[4] sm:order-[4] rounded-[18px] flex justify-center flex-col items-center gap-6 bg-white shadow-[0_7px_58px_rgb(117,117,117,0.1)]">
                  <span>
                    <img src={Correct} alt="" />
                  </span>
                  <span className="font-extrabold">طرق دفع آمنة</span>
                </div>
                <div className="w-[100%] h-[200px] lg:order-[4] sm:order-[4] md:order-[5]  rounded-[18px] flex justify-center flex-col items-center gap-6 bg-white shadow-[0_7px_58px_rgb(117,117,117,0.1)]">
                  <span>
                    <img src={Prize} alt="" />
                  </span>
                  <span className="font-extrabold">هدايا مميزة</span>
                </div>
                <div className="col-span-3 lg:order-[4]  md:order-[3] sm:order-[3] prize-box flex items-center relative justify-center ">
                  <h1 className="leading-[3rem] mr-[6rem] prize-title p-[20px] text-[48px] text-right font-extrabold ">
                    خصص هديتك مع سعادة
                  </h1>
                  <div className="circle">
                    <img src={Circle} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END section-2 */}

        {/* Start section-3 */}

        <section className="my-12">
          <div className="container m-auto">
            <div className="row relative my-6">
              <span className="heart-sticker">
                <img src={HeartSticker} alt="" />
              </span>
              <span className="cake-sticker">
                <img src={CakeSticker} alt="" />
              </span>
              <span className="surprise-sticker">
                <img src={SurpriseSticker} alt="" />
              </span>
              <div className="grid grid-cols-2 gap-5">
                <div className="card rounded-2xl flex flex-col gap-2 items-end">
                  <img src={Tape1} alt="" />
                  <div className="py-6 px-10">
                    <h1 className="card-title text-right text-[48px] font-bold">
                      مناسبات خاصة
                    </h1>
                    <p className="pr-9 font-[400]">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                </div>
                <div className="card rounded-2xl flex flex-col gap-2 items-end">
                  <div className="py-6 px-10">
                    <h1 className="card-title text-right text-[48px] font-bold">
                      هدايا اعياد ميلاد
                    </h1>
                    <p className="pr-9 font-[400]">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                  <img
                    className="object-scale-down object-bottom h-[100%]"
                    src={BagMockups1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row relative">
              <span className="heart-sticker">
                <img src={HeartSticker} alt="" />
              </span>
              <span className="cake-sticker">
                <img src={CakeSticker} alt="" />
              </span>
              <span className="surprise-sticker">
                <img src={SurpriseSticker} alt="" />
              </span>
              <div className="grid grid-cols-2 gap-5">
                <div className="card rounded-2xl flex flex-col gap-2 items-end">
                  <div className="py-6 px-10">
                    <h1 className="card-title mb-2 text-right text-[48px] font-bold">
                      هدايا زواج
                    </h1>
                    <p className="pr-9 font-[400]">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                  <img
                    className="object-none h-[100%] w-[100%]"
                    src={SaadaEnvlope}
                    alt=""
                  />
                </div>
                <div className="card rounded-2xl flex flex-col gap-2 items-end">
                  <div className="py-6 px-10">
                    <h1 className="card-title mb-2 text-right text-[48px] font-bold">
                      هدايا تخرج
                    </h1>
                    <p className="pr-9 font-[400]">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                  <img
                    className="object-none h-[100%] w-[100%]"
                    src={SaadaDraw}
                    alt=""
                  />
                </div>
              </div>

              <div className="card-2x my-5 grid grid-cols-2">
                <div className="mt-10">
                  <h1 className="font-bold text-right  pr-5 text-[48px]">
                    هدايا مولود جديد
                  </h1>
                  <p className="text-right pr-5">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </p>
                </div>
                <div>
                  <img src={Box2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END section-2 */}

        {/* Start section-3 */}
        <section>
          <div className="container m-auto">
            <div className="row">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className="sada-box flex flex-col gap-5">
                  <div className="w-[200px] text-right">
                    <img className="h-[172px] ml-auto" src={Rectangle} alt="" />
                    <p className="">
                      هذا النص هو مثال لنص يمكن أن
                      <br /> يستبدل في نفس المساحة
                    </p>
                  </div>
                  <div className="box-happineas flex flex-row justify-between flex-1 ">
                    <div className="self-center ml-10">
                      <img src={Arrow} alt="" />
                    </div>
                    <div className="about-sa3ada-box flex flex-col items-end">
                      <h1 className="flex flex-row items-center gap-5 ">
                        <img src={Star} alt="" />
                        <Link className="read-more">اقرأ المزيد عن سعادة</Link>
                      </h1>
                      <div className="flex items-end flex-col my-5">
                        <img src={RectangleImage} alt="" />
                        <p className="text-right">
                          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
                          لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك
                          أن تولد مثل هذا النص
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sa3ad-box-description ">
                  <h1 className="w-[100%]">هداياك المفضلة لجميع المناسبات</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END section-2 */}

        {/* Start section-3 */}
        <section className="contact-us mt-10">
          <div className="container m-auto">
            <div className="row">
              <div className="grid grid-cols-4 items-center gap-10">
                <div>
                  <img src={StarRotate} alt="" />
                </div>
                <div className=" col-span-2 flex flex-col items-end text-right">
                  <h1 className="contact-title">تواصل معنا</h1>
                  <p className="text-right font-[20px;]">
                    تواصل معنا في اي وقت او ارسل الينا وسيتم التواصل معك في{" "}
                    <br />
                    وقت للاستفسارات او حل جميع المشاكل التي تواجهك في التسوق من
                    خلال موقع سعادة.
                  </p>
                </div>
                <div className="ml-auto">
                  <img src={CackeHearts} alt="" />
                </div>
              </div>

              <div className="flex items-center justify-center mt-[7rem] pb-[4rem]">
                <Link className="insta-btn gap-1 items-center">
                  <span>
                    <img src={Insta} alt="" />
                  </span>
                  <span>Sadaa.co</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="grid px-9 grid-cols-5 mt-[8rem]  gap-14 pb-[8rem]">
              <img src={FristCake} alt="" />
              <img className="mt-[8rem]" src={SecondCake} alt="" />
              <img src={ThirdCake} alt="" />
              <img className="mt-[8rem]" src={FourthCake} alt="" />
              <img src={FifithCake} alt="" />
            </div>
          </div>
        </section>
        {/* END section-2 */}
      </AnimationPage>
    </>
  );
}
