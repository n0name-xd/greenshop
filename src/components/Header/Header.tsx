import Image from "next/image";
import Link from "next/link";
import { Nav } from "../Nav";

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className="header__container">
        <Image src="Logo.svg" alt="logo" width={150} height={34.3} />
        <Nav />
        <div>log</div>
      </div>
    </header>
  );
};
