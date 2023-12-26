"use client";

import { AdminMainBanner } from "@/src/components/AdminPanel/AdminMainBanner";
import { AdminSideMenu } from "@/src/components/AdminPanel/AdminSideMenu";

import { useState } from "react";

const AdminPanel: React.FC = (): JSX.Element => {
  const [adminCategories, setAdminCategories] = useState("Main slider");
  return (
    <div className="admin-panel">
      <AdminSideMenu
        adminCategories={adminCategories}
        setAdminCategories={setAdminCategories}
      />
      <div className="admin-panel__content">
        {adminCategories === "Main slider" ? <AdminMainBanner /> : null}
      </div>
    </div>
  );
};

export default AdminPanel;
