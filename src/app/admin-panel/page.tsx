"use client";

import Image from "next/image";

const AdminPanel: React.FC = (): JSX.Element => {
  return (
    <div className="admin-panel">
      <div className="admin-panel__side-menu">
        <h3>Categories</h3>
        <ul>
          <li
            style={{
              cursor: "pointer",
              padding: "0 0 0 10px",
            }}
          >
            main slider
          </li>
        </ul>
      </div>
      <div className="admin-panel__content">
        <Image
          style={{ border: "1px solid green" }}
          alt="banner"
          src="/slider/one.webp"
          width={170}
          height={50}
        />
        <Image
          style={{ border: "1px solid green" }}
          alt="banner"
          src="/slider/three.webp"
          width={170}
          height={50}
        />
        <Image
          style={{ border: "1px solid green" }}
          alt="banner"
          src="/slider/one.webp"
          width={170}
          height={50}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
