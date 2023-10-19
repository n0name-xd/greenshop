import Image from "next/image";
import { Nav } from "../Nav";

const HeaderControlPanel = (): JSX.Element => {
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
      </button>
      <button className="control-panele__login">Login</button>
    </div>
  );
};

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className="header__container">
        <Image src="Logo.svg" alt="logo" width={150} height={34.3} />
        <Nav />
        <HeaderControlPanel />
      </div>
    </header>
  );
};
