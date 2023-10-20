import Image from "next/image";

export const HeaderControlPanel = (): JSX.Element => {
  return (
    <div className="control-panele">
      <button className="control-panele__search noselect">
        <Image
          src="/icons/search-icon.svg"
          alt="search"
          width={20}
          height={20}
          priority
        />
      </button>
      <button className="control-panele__basket noselect">
        <Image
          src="/icons/basket-icon.svg"
          alt="search"
          width={24}
          height={24}
          priority
        />
        <span className="basket-count noselect">6</span>
      </button>
      <button className="control-panele__login noselect">Login</button>
    </div>
  );
};
