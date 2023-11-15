import Image from "next/image";

export interface iCartProductItemProps {
  img: string;
  title: string;
  SKU: string;
  price: number;
  count: number;
}

export const CartProductItem: React.FC<iCartProductItemProps> = ({
  img,
  title,
  SKU,
  price,
  count,
}: iCartProductItemProps): JSX.Element => {
  return (
    <div className="cart-products__item">
      <div className="col-1">
        <Image alt="product" src={img} width={70} height={70} />
        <div>
          <h4>{title}</h4>
          <div className="product__sku">
            <span>SKU: </span>
            <span className="sku-id">{SKU}</span>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="price">${price}.00</div>
      </div>
      <div className="col-3">
        <div className="product__counts">
          <button>-</button>
          <span>{count}</span>
          <button>+</button>
        </div>
      </div>
      <div className="col-4">
        <span className="product-total">${count * price}.00</span>
      </div>
      <div>
        <Image
          className="remove-product"
          alt="remove product"
          src="/icons/del.svg"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
