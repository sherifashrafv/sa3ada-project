import React from "react";
import { Link } from "react-router-dom";
import FooterImage from "../../assets/Home/Group 16065.svg";
import SadaLogo from "../../assets/Home/Saada Logo 2.svg";
import Sapchaticon from "../../assets/Home/snapchat icon.svg";
import facebookicon from "../../assets/Home/facebook icon.svg";
import InstgramIcon from "../../assets/Home/instgram icon.svg";
import "../Footer/index.css";
export default function Footer() {
  return (
    <footer className="sa3ad-footer  p-[4rem]">
      <div className="container m-auto">
        <div className="row">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-center">
            <div>
              <img src={FooterImage} alt="" />
            </div>
            <div className=" footer-links-2x col-span-2 flex flex-row gap-10 justify-end">
              <div className="flex flex-col items-end mb-2 text-right">
                <h1 className="footer-title mb-4">الاقسام</h1>
                <div className="footer-links-2x flex flex-row items-center gap-10">
                  <ul className="footer-links text-right">
                    <li className="mb-3">
                      <Link>هدايا زواج</Link>
                    </li>
                    <li>
                      <Link>مولود جديد</Link>
                    </li>
                  </ul>
                  <ul className="footer-links">
                    <li className="pb-3">
                      <Link>اعياد ميلاد</Link>
                    </li>
                    <li className="pb-3">
                      <Link>مناسبات خاصة</Link>
                    </li>
                    <li className="pb-3">
                      <Link>هدايا تخرج</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-end mb-2 text-right">
                <h1 className="footer-title mb-4">روابط مهمة</h1>
                <ul className="footer-links">
                  <li className="pb-3">
                    <Link>الرئيسية</Link>
                  </li>
                  <li className="pb-3">
                    <Link>عن سعادة</Link>
                  </li>
                  <li className="pb-3">
                    <Link>تواصل معنا</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="logo-box flex flex-col col-span-2 items-end">
              <img className="h-[89px] w-89" src={SadaLogo} alt="" />
              <p className="text-right mt-8">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس <br /> المساحة، لقد
                تم توليد هذا النص من مولد النص العربى
              </p>
              <ul className="mt-12 social-links flex flex-row items-center gap-5">
                <li>
                  <Link>
                    <img src={Sapchaticon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={facebookicon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={InstgramIcon} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
