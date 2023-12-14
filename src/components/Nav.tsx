"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Nav = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`${pathname === "/" ? "active" : ""} noselect`}
            href="/"
          >
            Home
            <span
              className={`link_border ${pathname === "/" ? "active" : ""}`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/shop" ? "active" : ""} noselect`}
            href="/shop"
          >
            Shop
            <span
              className={`link_border ${pathname === "/shop" ? "active" : ""}`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/plant-care" ? "active" : ""} noselect`}
            href="/plant-care"
          >
            Plant Care
            <span
              className={`link_border ${
                pathname === "/plant-care" ? "active" : ""
              }`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/blogs" ? "active" : ""} noselect`}
            href="/blogs"
          >
            Blogs
            <span
              className={`link_border ${pathname === "/blogs" ? "active" : ""}`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === "/admin-panel" ? "active" : ""
            } noselect`}
            href="/admin-panel"
          >
            Admin Panel
            <span
              className={`link_border ${
                pathname === "/admin-panel" ? "active" : ""
              }`}
            ></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
