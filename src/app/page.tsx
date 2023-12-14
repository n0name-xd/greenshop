// import { Counter } from "./components/Counter/Counter";

import { MainContent } from "../components/Main/MainContent";
import { MainSlider } from "../components/sliders/MainSlider";

const sliderListData = [
  "/slider/one.webp",
  "/slider/three.webp",
  "/slider/one.webp",
];

export default function IndexPage() {
  // return <Counter />

  return (
    <div>
      <MainSlider slides={sliderListData} />
      <MainContent />
    </div>
  );
}
