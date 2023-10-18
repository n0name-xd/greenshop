import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="footer__container">
        <div>
          <Image src="Logo.svg" alt="logo" width={150} height={34.3} />
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">Plant Care</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
          </ul>
        </div>
        <div>log</div>
      </div>
    </header>
  );
};
