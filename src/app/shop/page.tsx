import { ProductDescription } from "@/src/components/Shop/ProductDescription";
import { ShopItem } from "@/src/components/Shop/ShopItem";
import { ShopSlider } from "@/src/components/Shop/ShopSlider";
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
      <ProductDescription />
      <ShopSlider title="Releted Products" />
    </div>
  );
};

export default Shop;
