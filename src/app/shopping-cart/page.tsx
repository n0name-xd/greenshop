import { CartProducts } from "@/src/components/CartProducts/CartProducts";
import { BreadCrumbs } from "@/src/components/common/BreadCrambs";

const BreadCrumbsData = [
  {
    link: "/shop",
    title: "Shop",
  },
  {
    link: "/shopping-cart",
    title: "Shopping Cart",
  },
];

const ShoppingCart = (): JSX.Element => {
  return (
    <div className="shopping-cart">
      <BreadCrumbs links={BreadCrumbsData} />
      <CartProducts />
    </div>
  );
};

export default ShoppingCart;
