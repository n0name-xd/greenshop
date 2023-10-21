// import { Counter } from "./components/Counter/Counter";

import { MainContent } from "../components/Main/MainContent";
import { MainSlider } from "../components/sliders/MainSlider";

export default function IndexPage() {
  // return <Counter />
  return (
    <div>
      <MainSlider />
      <MainContent />
    </div>
  );
}
