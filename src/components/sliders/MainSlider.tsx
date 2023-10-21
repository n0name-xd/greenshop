"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

export const MainSlider = (): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: (dots: any) => <ul className="test">{dots}</ul>,
  };

  const sliderListData = [
    "/slider/one.webp",
    "/slider/two.webp",
    "/slider/three.webp",
  ];

  const sliderList = sliderListData.map((el: string): JSX.Element => {
    return (
      <div key={el} className="slider-item">
        <Image
          src={el}
          alt="slide"
          width={1200}
          height={450}
          priority
          style={{ width: "100%", maxHeight: "450px" }}
        />
      </div>
    );
  });

  return (
    <div className="slider">
      <Slider {...settings}>{sliderList}</Slider>
      <div className="slider-content noselect">
        <div className="slider-greeting">Welcome to GreenShop</div>
        <h1>
          Let’s Make a <br /> Better <span>Planet</span>
        </h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use <br /> our plants to create an unique Urban Jungle. Order
          your favorite plants!
        </p>
        <Link href="/shop" className="custom-button">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};
