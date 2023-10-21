import Image from "next/image";

export enum ProductSizeEnum {
  MEDIUM = "medium",
  SMALL = "small",
  LARGE = "large",
}

export interface IProduct {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  size: ProductSizeEnum;
  categories: string;
  discount: {
    isDiscount: boolean;
    percent: number | null;
  };
}

const productsList = [
  {
    id: 1,
    title: "Barberton Daisy",
    imgSrc: "",
    price: 119,
    size: "medium",
    categories: "House Plants",
    discount: {
      isDiscount: false,
      percent: null,
    },
  } as IProduct,
  {
    id: 2,
    title: "Angel Wing Begonia",
    imgSrc: "",
    price: 169,
    size: "large",
    categories: "seeds",
    discount: {
      isDiscount: false,
      percent: null,
    },
  } as IProduct,
  {
    id: 3,
    title: "African Violet",
    imgSrc: "",
    price: 199,
    size: "large",
    categories: "Small Plants",
    discount: {
      isDiscount: true,
      percent: 13,
    },
  } as IProduct,
];

export const MainProductList = (): JSX.Element => {
  const cartList = productsList.map((el: IProduct) => {
    return (
      <div className="main-content__card-item" key={el.id}>
        {el.title}
      </div>
    );
  });

  return (
    <div className="main-content__content">
      <div className="main-content__menu">
        <ul>
          <li className="active">All Plants</li>
          <li>New Arrivals</li>
          <li>Sale</li>
        </ul>
        <div className="menu-sort">
          Short by: Default sorting{" "}
          <Image
            alt="arrow"
            src="/icons/arrow-down.svg"
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className="main-content__card-list">{cartList}</div>
    </div>
  );
};
