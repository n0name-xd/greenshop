import Image from "next/image";

export const HeaderControlPanel = (): JSX.Element => {
  return (
    <div className="control-panele">
      <button className="control-panele__search">
        <Image
          src="/icons/search-icon.svg"
          alt="search"
          width={20}
          height={20}
        />
      </button>
      <button className="control-panele__basket">
        <Image
          src="/icons/basket-icon.svg"
          alt="search"
          width={24}
          height={24}
        />
        <span className="basket-count">6</span>
      </button>
      <button className="control-panele__login">Login</button>
    </div>
  );
};
