// import { Counter } from "./components/Counter/Counter";

import { MainContent } from "../components/Main/MainContent";
import { MainSlider } from "../components/sliders/MainSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Shop",
  description: "Green Shop",
};

const sliderListData = [
  "/slider/one.webp",
  "/slider/three.webp",
  "/slider/one.webp",
];

export default function IndexPage() {
  return (
    <div>
      <MainSlider slides={sliderListData} />
      <MainContent />
      {/* <Counter /> */}
    </div>
  );
}
