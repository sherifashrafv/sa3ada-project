import React from "react";
import Slider from "react-slick";
import "../Carousel/index.css";
import image1 from "../../assets/birthday/Carousel/1.svg";
import image2 from "../../assets/birthday/Carousel/2.svg";
import image3 from "../../assets/birthday/Carousel/3.svg";
import image4 from "../../assets/birthday/Carousel/4.svg";
import image5 from "../../assets/birthday/Carousel/5.svg";
import image6 from "../../assets/birthday/Carousel/6.svg";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
export default function Carousel() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-[5rem]">
      <Slider {...settings}>
        {images.map((image, indx) => (
          <div
            key={indx}
            className="bg-white brand-card rounded-[15px] border-2 border-b-[#F2F2F2] "
          >
            <div className="flex w-[159px] h-[150px] flex-col items-center justify-center">
              <img className="" src={image} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
