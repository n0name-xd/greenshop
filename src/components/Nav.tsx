"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Nav = (): JSX.Element => {
  const pathname = usePathname();
  const [page, setPage] = useState<any>("");

  useEffect(() => {}, []);
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
      </ul>
    </nav>
  );
};
