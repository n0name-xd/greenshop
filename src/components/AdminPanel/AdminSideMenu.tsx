"use client";

import { Dispatch, SetStateAction } from "react";

export interface IAdminSideMenuProps {
  adminCategories: string;
  setAdminCategories: Dispatch<SetStateAction<string>>;
}

export const AdminSideMenu: React.FC<IAdminSideMenuProps> = ({
  adminCategories,
  setAdminCategories,
}: IAdminSideMenuProps): JSX.Element => {
  const isActiveCategory = (name: string): string => {
    return adminCategories === name ? "active" : "";
  };
  return (
    <div className="admin-panel__side-menu">
      <h3>Categories</h3>
      <ul>
        <li
          onClick={() => setAdminCategories("Main slider")}
          className={isActiveCategory("Main slider")}
        >
          Main slider
        </li>
        <li
          onClick={() => setAdminCategories("Products")}
          className={isActiveCategory("Products")}
        >
          Products
        </li>
      </ul>
    </div>
  );
};
