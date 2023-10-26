import { ShopItem } from "@/src/components/Shop/ShopItem";
import { BreadCrumbs } from "@/src/components/common/BreadCrambs";

const BreadCrumbsData = [
  {
    link: "/shop",
    title: "Shop",
  },
];

const Shop = () => {
  return (
    <div className="shop">
      <BreadCrumbs links={BreadCrumbsData} />
      <ShopItem />
    </div>
  );
};

export default Shop;
