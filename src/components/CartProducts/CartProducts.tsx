import { CartProductItem } from "./CartProductItem";

const productsData = [
  {
    url: "/shoping-cart/1.png",
    title: "Barberton Daisy",
    SKU: "1995751877966",
    price: 119,
    count: 2,
  },
  {
    url: "/shoping-cart/2.png",
    title: "Blushing Bromeliad",
    SKU: "19957518757065",
    price: 139,
    count: 6,
  },
  {
    url: "/shoping-cart/3.png",
    title: "Aluminum Plant",
    SKU: "1995751877786",
    price: 179,
    count: 9,
  },
];

export const CartProducts = (): JSX.Element => {
  const productsList = productsData.map((el, i) => {
    return (
      <CartProductItem
        key={i}
        img={el.url}
        title={el.title}
        SKU={el.SKU}
        price={el.price}
        count={el.count}
      />
    );
  });
  return (
    <div className="cart-products">
      <div className="products-list">
        <div className="products-list__table">
          <div className="col-1">
            <h4>Products</h4>
          </div>
          <div className="col-2">
            <h4>Price</h4>
          </div>
          <div className="col-3">
            <h4>Quantity</h4>
          </div>
          <div className="col-4">
            <h4>Total</h4>
          </div>
        </div>
        <div className="cart-products__line" />
        <div className="cart-products__items">{productsList}</div>
      </div>
      <div className="total-cart">
        <h3>Cart Totals</h3>
        <div className="cart-products__line" />
      </div>
    </div>
  );
};
