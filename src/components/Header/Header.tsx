import Image from "next/image";
import { Nav } from "../Nav";
import Link from "next/link";
import { HeaderControlPanel } from "./HeaderControlPanel";

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className="header__container">
        <Link href="/">
          <Image src="Logo.svg" alt="logo" width={150} height={34.3} />
        </Link>
        <Nav />
        <HeaderControlPanel />
      </div>
    </header>
  );
};
