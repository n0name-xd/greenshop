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
      shopping-cart
    </div>
  );
};

export default ShoppingCart;
