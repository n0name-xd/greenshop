"use client";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    name: "House Plants",
    count: 33,
  },
  {
    name: "Potter Plants",
    count: 12,
  },
  {
    name: "Seeds",
    count: 65,
  },
  {
    name: "Small Plants",
    count: 39,
  },
  {
    name: "Big Plants",
    count: 23,
  },
  {
    name: "Succulents",
    count: 17,
  },
  {
    name: "Trerrariums",
    count: 19,
  },
  {
    name: "Gardening",
    count: 13,
  },
  {
    name: "Accessories",
    count: 18,
  },
];

const sizeCategory = [
  { name: "Small", count: 119 },
  { name: "Medium", count: 86 },
  { name: "Large", count: 78 },
];

interface IMenuItem {
  name: string;
  count: number;
}

export const MainSideMenu = (): JSX.Element => {
  const [sumRange, setSumRange] = useState<number | number[]>([39, 1230]);

  const categoryList = categories.map((el: IMenuItem, index: number) => {
    return (
      <li className={`${index === 0 ? "active" : ""}`} key={el.name}>
        <div>{el.name}</div>
        <div>({el.count})</div>
      </li>
    );
  });

  const sizeList = sizeCategory.map((el: IMenuItem, index: number) => {
    return (
      <li className={`${index === 0 ? "" : ""}`} key={el.name}>
        <div>{el.name}</div>
        <div>({el.count})</div>
      </li>
    );
  });

  return (
    <div className="main-content__side-menu">
      <div className="side-menu__control-panel">
        <div className="side-menu__categories">
          <h3>Categories</h3>
          <ul>{categoryList}</ul>
        </div>
        <div className="side-menu__price-range">
          <h3>Price Range</h3>
          <div className="price-range-container">
            <Slider
              defaultValue={sumRange}
              vertical={false}
              max={1800}
              min={1}
              step={1}
              pushable
              range
              onChange={(currentRange) => setSumRange(currentRange)}
            />
            <div className="price-range__value">
              Price:{" "}
              <span>
                ${Array.isArray(sumRange) ? sumRange[0] : ""} - $
                {Array.isArray(sumRange) ? sumRange[1] : ""}
              </span>
            </div>
            <button className="custom-button">Filter</button>
          </div>
        </div>
        <div className="side-menu__size">
          <h3>Size</h3>
          <ul>{sizeList}</ul>
        </div>
      </div>
      <Image
        alt="super sale"
        src="/main/sale.webp"
        width={310}
        height={410}
        priority
      />
    </div>
  );
};
