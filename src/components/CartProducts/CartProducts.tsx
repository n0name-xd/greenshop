import Link from "next/link";
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
        <h5 className="coupon">Coupon Apply</h5>
        <div className="coupon__block">
          <input type="text" placeholder="Enter coupon code here..." />
          <button>Apply</button>
        </div>
        <div className="total__row">
          <h5>Subtotal</h5>
          <span>$2,683.00</span>
        </div>
        <div className="total__row">
          <h5>Coupon Discount</h5>
          <span style={{ fontSize: "15px" }}>(-) 00.00</span>
        </div>
        <div className="total__row">
          <h5>Shiping</h5>
          <span>$16.00</span>
        </div>
        <div className="total__link">
          <Link href="#">View shipping charge</Link>
        </div>

        <div style={{ marginTop: "26px" }} className="total__row">
          <h5 style={{ color: "#3D3D3D", fontSize: "16px" }}>Total</h5>
          <span style={{ color: "#46A358", fontSize: "18px", fontWeight: 700 }}>
            $2,699.00
          </span>
        </div>
        <button className="total__button">Proceed To Checkout</button>
        <Link className="total__main-link" href="#">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};
