"use client";

import Slider from "react-slick";

const sliderListData = [
  {
    link: "",
    img: "/shop/slider/4.png",
    title: "Beach Spider Lily",
    price: "$129.00",
  },
  {
    link: "",
    img: "/shop/slider/2.png",
    title: "Blushing Bromeliad",
    price: "$139.00",
  },
  {
    link: "",
    img: "/shop/slider/3.png",
    title: "Aluminum Plant",
    price: "$179.00",
  },
  {
    link: "",
    img: "/shop/slider/4.png",
    title: "Bird's Nest Fern",
    price: "$99.00",
  },
  {
    link: "",
    img: "/shop/slider/5.png",
    title: "Chinese Evergreen ",
    price: "$39.00",
  },
  {
    link: "",
    img: "/shop/slider/4.png",
    title: "Beach Spider Lily",
    price: "$129.00",
  },
  {
    link: "",
    img: "/shop/slider/2.png",
    title: "Blushing Bromeliad",
    price: "$139.00",
  },
  {
    link: "",
    img: "/shop/slider/3.png",
    title: "Aluminum Plant",
    price: "$179.00",
  },
  {
    link: "",
    img: "/shop/slider/4.png",
    title: "Bird's Nest Fern",
    price: "$99.00",
  },
  {
    link: "",
    img: "/shop/slider/5.png",
    title: "Chinese Evergreen ",
    price: "$39.00",
  },
  {
    link: "",
    img: "/shop/slider/4.png",
    title: "Beach Spider Lily",
    price: "$129.00",
  },
  {
    link: "",
    img: "/shop/slider/2.png",
    title: "Blushing Bromeliad",
    price: "$139.00",
  },
  {
    link: "",
    img: "/shop/slider/3.png",
    title: "Aluminum Plant",
    price: "$179.00",
  },
  {
    link: "",
    img: "/shop/slider/4.png",
    title: "Bird's Nest Fern",
    price: "$99.00",
  },
  {
    link: "",
    img: "/shop/slider/5.png",
    title: "Chinese Evergreen ",
    price: "$39.00",
  },
] as Array<ISLiderShopItem>;

export interface ISLiderShopItem {
  link: string;
  img: string;
  title: string;
  price: string;
}

export interface IShopSliderProps {
  title: string;
}

export const ShopSlider: React.FC<IShopSliderProps> = ({
  title,
}: IShopSliderProps): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots: any) => <ul>{dots}</ul>,
  };

  const sliderList = sliderListData.map(
    (el: ISLiderShopItem, index: number): JSX.Element => {
      return (
        <div key={el.title}>
          <div className="shop-slider-item">
            <div
              style={{
                width: "212px",
                height: "212px",
                flexShrink: 0,
                background: `url("${el.img}"), lightgray 50% / cover no-repeat`,
                mixBlendMode: "multiply",
              }}
            ></div>
          </div>
          <div className="shop-slider-item__title">{el.title}</div>
          <div className="shop-slider-item__price">{el.price}</div>
        </div>
      );
    }
  );

  return (
    <div className="shop-slider">
      <div className="shop-slider__title">{title}</div>
      <Slider {...settings}>{sliderList}</Slider>
    </div>
  );
};
